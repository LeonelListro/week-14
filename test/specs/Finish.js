const Finish = require('../pageobjects/finish.page');

describe('Test the components of the finish page', ()=> {
    it('Check the title of the page', async ()=> {
        await expect(Finish.pageTitle).toHaveTextContaining('CHECKOUT: COMPLETE!');
    });
    it('Check the subtitle of the page', async ()=> {
        await expect(Finish.pageSubTitle).toHaveTextContaining('THANK YOU FOR YOUR ORDER');
    });
    it('Check the text below the subtitle', async ()=> {
        await expect(Finish.pageText).toHaveTextContaining(
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
        );
    });
    it('Check the image of the page', async ()=> {
        await expect(Finish.pageImg).toExist();
    });
})

describe('Test the functionality of the BackHome button', ()=> {
    it('Test if the button redirect correctly', async ()=> {
        await Finish.backHomeBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
})