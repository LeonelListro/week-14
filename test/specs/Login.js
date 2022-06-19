const LoginPage = require('../pageobjects/login.page');

describe('Login page testing', () => {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/');
    })

    describe('Checking elements into the login page', ()=> {
        it('Verify if spaceMan img exists', async ()=> {
            await LoginPage.open();
            await expect(LoginPage.imgSpace1).toExist();
        })
        it('Verify the logo exists', async ()=> {
            await LoginPage.open();
            await expect(LoginPage.imgLogo).toExist();
        })
    })

    describe('login with standard user', ()=> {
        it('should login with valid credentials', async ()=> {
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        });
    })

    describe('login with locked out user', ()=> {
        it('should appears the locked message', async ()=> {
            await LoginPage.open();
            await LoginPage.login('locked_out_user', 'secret_sauce');
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        })
    })

    describe('login with problem user', ()=> {
        it('should login to the problem user inventory', async ()=> {
            await LoginPage.open();
            await LoginPage.login('problem_user', 'secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            await expect(LoginPage.imgSpaceman).toExist();
            await expect(LoginPage.imgDog).toExist();
        })
    })

    describe('login with performance glitch user', ()=> {
        it('should login with the performance flitch data', async ()=> {
            await LoginPage.open();
            await LoginPage.login('performance_glitch_user', 'secret_sauce');
            await browser.setTimeout({ 'pageLoad': 10000 });
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
    })

    describe('login with invalid data or empty field', ()=> {
        it('Using invalid data into the user field and password field should not login', async ()=> {
            await LoginPage.open();
            await LoginPage.login('asd', 'secret_sauce');
            await expect(LoginPage.errorMessage).toHaveText(
                'Epic sadface: Username and password do not match any user in this service'
            );
        })
        it('Using no data into the password field should not login', async ()=> {
            await LoginPage.open();
            await LoginPage.login('standard_user', '');
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        })
        it('Using no data into the user field should not login', async ()=> {
            await LoginPage.open();
            await LoginPage.login('', 'secret_sauce');
            await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        })
    })
});


