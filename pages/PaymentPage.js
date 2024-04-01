const { expect } = require("@playwright/test")
const PaymentLocators = require("../locators/Payment.locators.js")

class PaymentPage {
    constructor(page){
        this.page = page
        this.name = page.locator(PaymentLocators.NAMEONCARD_IN)
        this.cardNumber = page.locator(PaymentLocators.CARDNUMBER_IN)
        this.cvc = page.locator(PaymentLocators.CVC_IN)
        this.month = page.locator(PaymentLocators.EXPMONTH_IN)
        this.year = page.locator(PaymentLocators.EXPYEAR_IN)
        this.payBt = page.locator(PaymentLocators.PAY_BT)
        this.continueBt = page.locator(PaymentLocators.CONTINUE_BT)
    }

    async fillPaymentDetailsAndPay(){
        await this.name.fill("Marcelo Payment")
        await this.cardNumber.fill('4222222222222222')
        await this.cvc.fill('364')
        await this.month.fill('08')
        await this.year.fill('2500')
        await this.payBt.click()
        await this.continueBt.click()
    }

}

module.exports = {PaymentPage}