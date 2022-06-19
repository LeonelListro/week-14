class InventoryPage {

    //Getters

    get imgBackpack () {return $('#item_4_img_link > img');}
    get titleBackpack () {return $('#item_4_title_link > div');}
    get addBackpack () {return $('#add-to-cart-sauce-labs-backpack');}
    get removeBackpack () {return $('#remove-sauce-labs-backpack');}

    get imgBoltshirt () {return $('#item_1_img_link > img');}
    get titleBoltshirt () {return $('#item_1_title_link > div');}
    get addBoltshirt () {return $('#add-to-cart-sauce-labs-bolt-t-shirt');}
    get removeBoltshirt () {return $('#remove-sauce-labs-bolt-t-shirt');}

    get imgLabsonesie () {return $('#item_2_img_link > img');}
    get titleLabsonesie () {return $('#item_2_title_link > img');}
    get addLabsonesie () {return $('#add-to-cart-sauce-labs-onesie');}
    get removeLabsonesie () {return $('#remove-sauce-labs-onesie');}

    get imgBikelight () {return $('#item_0_img_link > img');}
    get titleBikelight () {return $('#item_0_title_link > img');}
    get addBikelight () {return $('#add-to-cart-sauce-labs-bike-light');}
    get removeBikelight () {return $('#remove-sauce-labs-bike-light');}

    get imgFleecejacket () {return $('#item_5_img_link > img');}
    get titleFleecejacket () {return $('#item_5_title_link > img');}
    get addFleecejacket () {return $('#add-to-cart-sauce-labs-fleece-jacket');}
    get removeFleecejacket () {return $('#remove-sauce-labs-fleece-jacket');}

    get imgRedshirt () {return $('#item_3_img_link > img');}
    get titleRedshirt () {return $('#item_3_title_link > div');}
    get addRedshirt () {return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')}
    get removeRedshirt () {return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]')}

    get backBtn () {return $('#back-to-products');}

    //Methods
    open () {
        return browser.url('http://www.saucedemo.com/inventory.html')
    }

    async backToProductsClick () {
        await this.backBtn.click();
    }

    async imgClick () {
        await this.imgBackpack.click();
        await this.imgBoltshirt.click();
        await this.imgLabsonesie.click();
        await this.imgBikelight.click();
        await this.imgFleecejacket.click();
        await this.imgRedshirt.click();
    }

    async addProducts () {
        await this.addBackpack.click();
        await this.addBoltshirt.click();
        await this.addLabsonesie.click();
        await this.addBikelight.click();
        await this.addFleecejacket.click();
        await this.addRedshirt.click();
    }

    async removeProducts () {
        await this.removeBackpack.click();
        await this.removeBoltshirt.click();
        await this.removeLabsonesie.click();
        await this.removeBikelight.click();
        await this.removeFleecejacket.click();
        await this.removeRedshirt.click();
    }
}

module.exports = new InventoryPage();
