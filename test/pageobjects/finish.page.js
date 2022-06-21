class finish {

    //Getters

    get pageTitle () {return $('#header_container > div.header_secondary_container > span')}
    get pageSubTitle () {return $('#checkout_complete_container > h2')}
    get pageText () {return $('#checkout_complete_container > div')}
    get pageImg () {return $('#checkout_complete_container > img')}

    get backHomeBtn () {return $('#back-to-products')}


    //Methods

    async btnClick() {
        await this.backHomeBtn.click();
    }
}

module.exports = new finish();