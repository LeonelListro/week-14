const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutOnePage = require('../pageobjects/checkoutOne.page');

describe('Check the first checkout page', ()=> {
    beforeAll('Go to the checkout page', async ()=> {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.addBackpack.click();
        await Header.cartMenu.click();
        await CartPage.checkoutBtn.click();
    });

    describe('Check title of the checkout page', ()=> {
        it('Test if the title of the page is the correct', async ()=> {
            await expect(CheckoutOnePage.titlePage).toHaveTextContaining('CHECKOUT: YOUR INFORMATION');
        });
    });

    describe('Check the inputs in the checkout page with empty fields', ()=> {
        it('Test the functionality of the inputs whit name empty ', async ()=> {
            await CheckoutOnePage.setName('');
            await CheckoutOnePage.continueBtn.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: First Name is required');
            await CheckoutOnePage.crossErrorBtn.click();
            await expect(CheckoutOnePage.errorContainer).not.toBeDisplayed();
        });
        it('Test the functionality of the inputs whit lastName empty ', async ()=> {
            await CheckoutOnePage.setName('name');
            await CheckoutOnePage.setLastName('');
            await CheckoutOnePage.continueBtn.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: Last Name is required');
            await CheckoutOnePage.crossErrorBtn.click();
            await expect(CheckoutOnePage.errorContainer).not.toBeDisplayed();
        });
        it('Test the functionality of the inputs whit ZIP empty ', async ()=> {
            await CheckoutOnePage.setName('name');
            await CheckoutOnePage.setLastName('lastName');
            await CheckoutOnePage.setZip('');
            await CheckoutOnePage.continueBtn.click();
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: Postal Code is required');
            await CheckoutOnePage.crossErrorBtn.click();
            await expect(CheckoutOnePage.errorContainer).not.toBeDisplayed();
        });
    });

    describe('Check the functionality of the cancel button', ()=> {
        it('Test if the cancel button redirect to the cart', async ()=> {
            await CheckoutOnePage.cancelBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        });
    });

    describe('Check the functionality of the continue button', ()=> {
        it('Test if the continue button redirect to the second checkout', async ()=> {
            await CheckoutOnePage.continueBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        });
    });
})