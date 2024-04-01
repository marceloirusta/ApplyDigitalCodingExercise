const ContactLocators = require("../locators/Contact.locators.js")
const HomeScreenLocators = require("../locators/HomeScreen.locators.js")
const ProductDetailsLocators = require("../locators/ProductDetails.locators.js")

class ContactPage {
    constructor(page){
        this.page = page
        this.contactUsBt = page.locator(HomeScreenLocators.CONTACTUS_BT)
        this.name = page.locator(ContactLocators.NAME_IN)
        this.email = page.locator(ContactLocators.EMAIL_IN)
        this.subject = page.locator(ContactLocators.SUBJECT_IN)
        this.message = page.locator(ContactLocators.MESSAGE_TB)
        this.submitBt = page.locator(ContactLocators.SUBMIT_BT)
    }

    async fillAContactForm(){
        await this.contactUsBt.click()
        await this.name.fill('Marcelo Automation')
        await this.email.fill('contact@email.com')
        await this.subject.fill('The subject')
        await this.message.fill('A message')
        await this.submitBt.click()
    }
}

module.exports = {ContactPage}