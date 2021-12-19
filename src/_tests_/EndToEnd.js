import jest from 'jest';
import puppeteer from 'puppeteer';


describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
      });

    test('An event element is collapsed by default', async () => {    
        const eventDetails = await page.$('.event .more-info');
        expect(eventDetails).toBeNull();
      });

      test('User can expand an event to see its details', async () => {
        const eventDetails = await page.$('.event .more-info');
        expect(eventDetails).toBeDefined();
      });

      test('User can collapse an event to hide its details', async () => {
        await page.click('.event .show-more');
        const eventDetails = await page.$('.event .more-info');
        expect(eventDetails).toBeNull();
      });
});
