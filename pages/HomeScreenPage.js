const { expect } = require("@playwright/test")
const HomeScreenLocators = require("../locators/HomeScreen.locators.js")
const ProductDetailsLocators = require("../locators/ProductDetails.locators.js")

class HomeScreenPage {
    constructor(page){
        this.page = page
        this.logo = page.locator(HomeScreenLocators.HOMEPAGELOGO_IMG)
        this.firstProduct = page.locator(HomeScreenLocators.FIRSTPRODUCT_BT)
        this.productAvailability = page.locator(ProductDetailsLocators.PRODUCTAVAILABILITY_TX)
        this.cartBt = page.locator(HomeScreenLocators.CART_BT)
        this.logoutBt = page.locator(HomeScreenLocators.LOGOUT_BT)
    }

    async goTo(){
        await this.page.goto("https://automationexercise.com/")
        await this.page.waitForLoadState('networkidle')
        expect(await this.logo.isVisible(), "Login img is not visible").toBe(true)
    }

    async scrollDownHalfwayThrough() {
        await this.page.evaluate(() => {
            const totalHeight = document.body.scrollHeight;
            const halfway = totalHeight / 2;
            window.scrollTo(0, halfway);
        });
    }

    async chooseFirstProduct(){
        await this.firstProduct.click()
    }

    async clickOnCart(){
        await this.cartBt.click()
    }

    async logout(){
        await this.logoutBt.click()
    }
}

module.exports = {HomeScreenPage}