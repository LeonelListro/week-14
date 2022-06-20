const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');

describe('Inventory page test', ()=> {
    beforeEach('Login user and go to inventory page', async ()=> {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    describe('Test burger menu', ()=> {
        beforeEach('Inventory page', ()=> {
            browser.url('https://www.saucedemo.com/inventory.html')
        });
        it('Testing functionality of sidebar about button', async ()=> {
            await Header.burgerMenu.click();
            await expect(Header.aboutSidebar).toExist();
            await expect(Header.aboutSidebar).toBeClickable();
            await Header.aboutSidebar.click();
            await browser.pause(1000)
            await expect(browser).toHaveUrl('https://saucelabs.com/');
        });
        it('Testing functionality of sidebar logout button', async ()=> {
            await Header.burgerMenu.click();
            await expect(Header.logoutSidebar).toExist();
            // await Header.logoutSidebar.click();
            // await expect(browser).toHaveUrl('https://saucedemo.com/');
        });
        // it('Testing functionality of sidebar reset button', async ()=> {
        //     await InventoryPage.addBackpack.click();
        //     await Header.burgerMenu.click();
        //     await expect(Header.resetSidebar).toExist();
        //     // await Header.resetSidebar.click();
        //     // await expect(Header.cartMenu).not.toBeDisplayed();
        // });
        it('Testing sidebar cross functionality', async ()=> {
            await Header.burgerMenu.click();
            await expect(Header.crossSidebar).toExist();
            await Header.crossSidebar.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    })

    describe('Testing redirection of images', ()=> {
        it('Testing click on Backpack image', async ()=> {
            await InventoryPage.imgBackpack.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
            await InventoryPage.backBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        it('Testing click on Bolt T-Shirt image', async ()=> {
            await InventoryPage.imgBoltshirt.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
            await InventoryPage.backBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        it('Testing click on Labs Onesie image', async ()=> {
            await InventoryPage.imgLabsonesie.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
            await InventoryPage.backBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        it('Testing click on Bike Light image', async ()=> {
            await InventoryPage.imgBikelight.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
            await InventoryPage.backBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        it('Testing click on Fleece Jacket image', async ()=> {
            await InventoryPage.imgFleecejacket.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
            await InventoryPage.backBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        it('Testing click on Red T-Shirt image', async ()=> {
            await InventoryPage.imgRedshirt.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
            await InventoryPage.backBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
    })

    describe('Testing add buttons and remove buttons', ()=> {
        it('Testing click on add to cart and remove Backpack buttons', async ()=> {
            await InventoryPage.addBackpack.click();
            await expect(Header.cartMenu).toBeDisplayed();
            await InventoryPage.removeBackpack.click();
        });
        it('Testing click on add to cart and remove Bolt T-Shirt buttons', async ()=> {
            await InventoryPage.addBoltshirt.click();
            await expect(Header.cartMenu).toBeDisplayed();
            await InventoryPage.removeBoltshirt.click();
        });
        it('Testing click on add to cart and remove Labs Onesie buttons', async ()=> {
            await InventoryPage.addLabsonesie.click();
            await expect(Header.cartMenu).toBeDisplayed();
            await InventoryPage.removeLabsonesie.click();
        })
        it('Testing click on add to cart and remove Bike Light buttons', async ()=> {
            await InventoryPage.addBikelight.click();
            await expect(Header.cartMenu).toBeDisplayed();
            await InventoryPage.removeBikelight.click();
        })
        it('Testing click on add to cart and remove Fleece Jacket buttons', async ()=> {
            await InventoryPage.addFleecejacket.click();
            await expect(Header.cartMenu).toBeDisplayed();
            await InventoryPage.removeFleecejacket.click();
        })
        it('Testing click on add to cart and remove Red T-Shirt buttons', async ()=> {
            await InventoryPage.addRedshirt.click();
            await expect(Header.cartMenu).toBeDisplayed();
            await InventoryPage.removeRedshirt.click();
        })
    })

});