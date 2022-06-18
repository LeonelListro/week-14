class Header {

    //Getters

    get burgerMenu () {return $('#react-burger-menu-btn');}
    get cartMenu () {return $('#shopping_cart_container > a');}
    get browserMenu () {return $('.right_component > span > select');}

    //Methods

    async clickMenues () {
        await this.burgerMenu.click();
        await this.cartMenu.click();
        await this.browserMenu.click();
    }
}