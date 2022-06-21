class checkoutTwo {

    //Getters

    get pageTitle () {return $('#header_container > div.header_secondary_container > span')}

    get backpackItem () {return $('#checkout_summary_container > div > div.cart_list > div.cart_item')}

    get payInfo () {return $('#checkout_summary_container > div > div.summary_info > div:nth-child(1)')}
    get payData () {return $('#checkout_summary_container > div > div.summary_info > div:nth-child(2)')}
    get shippingInfo () {return $('#checkout_summary_container > div > div.summary_info > div:nth-child(3)')}
    get shippingData () {return $('#checkout_summary_container > div > div.summary_info > div:nth-child(4)')}
    get itemTotalData () {return $('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label')}
    get taxData () {return $('#checkout_summary_container > div > div.summary_info > div.summary_tax_label')}
    get totalData () {return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label')}

    get cancelBtn () {return $('#cancel')}
    get finishBtn () {return $('#finish')}

    //Methods

    async btnClick() {
        await this.cancelBtn.click();
        await this.finishBtn.click();
    }
}

module.exports = new checkoutTwo();