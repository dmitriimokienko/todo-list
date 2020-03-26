import puppeteer from 'puppeteer';

describe('remove category', () => {
    it('remove category correct', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/');
        await page.click('[data-test="remove-categoty-btn"]');
        await page.click('[data-test="confirm-remove-category-btn"]');

        const categoriesTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="caregory-title"]')].map(item => item.innerText)
        );

        expect(categoriesTitles.length).toEqual(3);

        const tasksTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="task-item"]')].map(item => item.innerText)
        );

        expect(tasksTitles.length).toEqual(1);
        browser.close();
    });

    it('undo remove category correct', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/');
        await page.click('[data-test="remove-categoty-btn"]');
        await page.click('[data-test="confirm-undo-remove-category-btn"]');

        const categoriesTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="caregory-title"]')].map(item => item.innerText)
        );

        expect(categoriesTitles.length).toEqual(4);

        const tasksTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="task-item"]')].map(item => item.innerText)
        );

        expect(tasksTitles.length).toEqual(4);
        browser.close();
    });

    it('remove all categories correct', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/');

        for (let i = 0; i < 4; i++) {
            await page.click('[data-test="remove-categoty-btn"]');
            await page.click('[data-test="confirm-remove-category-btn"]');
        }

        const categoriesTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="caregory-title"]')].map(item => item.innerText)
        );

        expect(categoriesTitles.length).toEqual(0);

        const tasksTitles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="task-item"]')].map(item => item.innerText)
        );

        expect(tasksTitles.length).toEqual(0);
        browser.close();
    });
});
