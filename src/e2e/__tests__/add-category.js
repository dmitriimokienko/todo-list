import puppeteer from 'puppeteer';

describe('add category', () => {
    it('add category correct', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const newTitle = 'test';

        await page.goto('http://localhost:3000/');
        await page.type('[data-test=add-category-field]', newTitle);
        await page.click('[data-test=add-category-btn]');

        const titles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="caregory-title"]')].map(item => item.innerText)
        );

        expect(titles[0]).toEqual('test');
        browser.close();
    });

    it('category with empty title is not added', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const newTitle = '';

        await page.goto('http://localhost:3000/');
        await page.type('[data-test=add-category-field]', newTitle);
        await page.click('[data-test=add-category-btn]');

        const titles = await page.evaluate(() =>
            [...document.querySelectorAll('[data-name="caregory-title"]')].map(item => item.innerText)
        );
        const errorText = await page.evaluate(() => {
            return document.querySelector('[ data-error="empty-category-title"]').innerText;
        });

        expect(titles[0]).not.toEqual('');
        expect(errorText).toEqual('Title field is required');

        browser.close();
    });
});
