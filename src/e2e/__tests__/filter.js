import puppeteer from 'puppeteer';

describe('filter', () => {
    it('filter correct', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/');
        await page.click('[data-test="filter-checkbox"]');
        await page.type('[data-test="filter-field"]', 'To-Do');
        await page.keyboard.press('Enter');

        const tasksTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="task-item"]')].map(item => item.innerText)
        );

        expect(tasksTitles.length).toEqual(2);
        browser.close();
    });

    it('filter incorrect query length', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/');
        await page.type('[data-test="filter-field"]', '1');
        await page.keyboard.press('Enter');

        const tasksTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="task-item"]')].map(item => item.innerText)
        );

        expect(tasksTitles.length).not.toEqual(1);
        browser.close();
    });
});
