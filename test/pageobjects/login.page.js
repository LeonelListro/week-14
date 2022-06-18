class LoginPage {
    // Getters
    get inputUsername () {return $('#user-name');}
    get inputPassword () {return $('#password');}
    get btnLogin () {return $('#login-button');}
    get imgSpace1 () {return $('.bot_column')}
    get imgLogo () {return $('.login_logo')}
    get errorMessage () {return $('.error-message-container.error')}
    get imgSpaceman () {return $('div.peek')}
    get imgDog () {return $('#item_4_img_link > img')}

    // Setters
    async setUsername (username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword (password) {
        await this.inputPassword.setValue(password);
    }

    // Methods
    async login (username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    }

    open () {
        return browser.url('http://www.saucedemo.com/');
    }
}

module.exports = new LoginPage();
