const ProductDetailsLocators = require("../locators/ProductDetails.locators.js")

class ProductDetailsPage {
    constructor(page){
        this.page = page
        this.quantity = page.locator(ProductDetailsLocators.QUANTITY_TB)
        this.addToCartBt = page.locator(ProductDetailsLocators.ADDTOCART_BT)
        this.added = page.locator(ProductDetailsLocators.ADDED_TX)
        this.viewCart = page.locator(ProductDetailsLocators.VIEWCART_BT)
    }

    async enterProductQuantity(){
        await this.quantity.fill('33')
    }

    async addToCartAndProceed(){
        await this.addToCartBt.click()
        await this.viewCart.click()
    }
}

module.exports = {ProductDetailsPage}