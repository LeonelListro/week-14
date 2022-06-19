class cartPage {

    Getters

    get backpackItem () {return $('#cart_contents_container > div > div.cart_list > div:nth-child(3)')}
    get boltshirtItem () {return $('#cart_contents_container > div > div.cart_list > div:nth-child(4)')}

    Methods
}

module.exports = new cartPage();