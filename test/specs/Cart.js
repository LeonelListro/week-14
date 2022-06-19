const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const cartPage = require('../pageobjects/cart.page');

describe('Cart page testing', () => {
    beforeEach('open browser', async ()=> {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    describe('Go to the cart page', ()=> {
        beforeEach('Open inventory', ()=> {
            browser.url('https://www.saucedemo.com/inventory.html')
        })
        it('Route to the cart', async ()=> {
            await InventoryPage.addBackpack.click();
            await InventoryPage.addBoltshirt.click();
            await Header.cartMenu.click();
        })
    });

        describe('Verify items existence in cart', ()=> {
            it('Testing if items exist', async ()=> {
                await expect(cartPage.backpackItem).toExist;
                await expect(cartPage.boltshirtItem).toExist;
            })
        })
});
