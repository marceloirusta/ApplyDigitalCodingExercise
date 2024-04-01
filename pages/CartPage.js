const CartLocators = require("../locators/Cart.locators.js")

class CartPage {
    constructor(page){
        this.page = page
        this.proceedToCheckout = page.locator(CartLocators.PROCEEDTOCHECKOUT_BT)
        this.register = page.locator(CartLocators.REGISTERLOGIN_BT)
        this.placeOrderComment = page.locator(CartLocators.PLACEORDERCOMMENT_TB)
        this.placeOrderBt = page.locator(CartLocators.PLACEORDER_BT)
    }

    async clickOnProceedToCheckout(){
        await this.proceedToCheckout.click()
    }

    async clickOnRegisterLogin(){
        await this.register.click()
    }

    async addPlaceOrderCommentAndProceed(){
        await this.placeOrderComment.fill('A comment')
        await this.placeOrderBt.click()
    }
}

module.exports = {CartPage}