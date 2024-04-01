const { CartPage } = require("../pages/CartPage")
const { ContactPage } = require("../pages/ContactPage")
const { HomeScreenPage } = require("../pages/HomeScreenPage")
const { LoginPage } = require("../pages/LoginPage")
const { PaymentPage } = require("../pages/PaymentPage")
const { ProductDetailsPage } = require("../pages/ProductDetailsPage")

class PageManager{
    constructor(page){
        this.page = page
        this.homeScreenPage = new HomeScreenPage(this.page)
        this.productDetailsPage = new ProductDetailsPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.paymentPage = new PaymentPage(this.page)
        this.contactPage = new ContactPage(this.page)
    }

    getHomeScreenPage(){
        return this.homeScreenPage
    }

    getProductDetailsPage(){
        return this.productDetailsPage
    }

    getCartPage(){
        return this.cartPage
    }

    getLoginPage(){
        return this.loginPage
    }

    getPaymentPage(){
        return this.paymentPage
    }

    getContactPage(){
        return this.contactPage
    }
}

module.exports = {PageManager}