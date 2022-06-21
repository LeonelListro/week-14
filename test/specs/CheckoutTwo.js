const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutOnePage = require('../pageobjects/checkoutOne.page');
const CheckoutTwo = require('../pageobjects/checkoutTwo.page');

describe('Check title of the checkout page', ()=> {
    it('Test if the title of the page is the correct', async ()=> {
        await expect(CheckoutTwo.pageTitle).toHaveTextContaining('CHECKOUT: OVERVIEW');
    });
});

describe('Check the information of the page', ()=> {
    it('Test if the item was displayed ', async ()=> {
        await expect(CheckoutTwo.backpackItem).toBeDisplayed();
        await expect(CheckoutTwo.backpackItem).toHaveTextContaining('29.99');
    });
    it('Test the Payment information', async ()=> {
        await expect(CheckoutTwo.payInfo).toHaveText('Payment Information:');
        await expect(CheckoutTwo.payData).toHaveTextContaining('SauceCard');
    });
    it('Test the Shipping information', async ()=> {
        await expect(CheckoutTwo.shippingInfo).toHaveText('Shipping Information:');
        await expect(CheckoutTwo.shippingData).toHaveTextContaining('FREE PONY EXPRESS DELIVERY!');
    });
    it('Test the total price information', async ()=> {
        await expect(CheckoutTwo.itemTotalData).toHaveTextContaining('Item total:');
        await expect(CheckoutTwo.taxData).toHaveTextContaining('Tax:');
        await expect(CheckoutTwo.totalData).toHaveTextContaining('Total:');
    });
});

describe('Check the functionality of the cancel button', ()=> {
    it('Test if the cancel button redirect to the cart', async ()=> {
        await CheckoutTwo.cancelBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
});

describe('Check the functionality of the finish button', ()=> {
    it('Test if the finish button redirect to the second checkout', async ()=> {
        await browser.url('https://www.saucedemo.com/cart.html');
        await CartPage.checkoutBtn.click();
        await CheckoutOnePage.setName('name');
        await CheckoutOnePage.setLastName('lastName');
        await CheckoutOnePage.setZip('2000');
        await CheckoutOnePage.continueBtn.click();
        await CheckoutTwo.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await browser.pause(1100);
    });
});
