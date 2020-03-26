import puppeteer from 'puppeteer';

describe('edit task', () => {
    it('edit task correct', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const newTitle = 'test ';
        const newDescription = 'this is test description';

        await page.goto('http://localhost:3000/task/100');
        await page.type('[data-test="edit-task-title"]', newTitle);
        await page.click('[data-test="edit-task-done"]');
        await page.type('[data-test="edit-task-description"]', newDescription);
        await page.click('[data-test="edit-task-btn-submit"]');

        const taskTitle = await page.$eval('[data-name="task-item"]', element => element.textContent);

        expect(taskTitle).toEqual('test To-Do Item 1');
        browser.close();
    });

    it('edit task incorrect description', async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const newTitle = 'test ';
        const newDescription = 'a';

        await page.goto('http://localhost:3000/task/100');
        await page.type('[data-test="edit-task-title"]', newTitle);
        await page.click('[data-test="edit-task-done"]');
        await page.type('[data-test="edit-task-description"]', newDescription);
        await page.click('[data-test="edit-task-btn-submit"]');

        const errorMessage = await page.$eval('[data-test="error-task"]', element => element.textContent);

        expect(errorMessage).toEqual('The length of description should be between 3 and 50 characters');
        browser.close();
    });
});
