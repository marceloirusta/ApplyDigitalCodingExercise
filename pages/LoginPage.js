const { expect } = require("@playwright/test")
const { faker } = require('@faker-js/faker');
const LoginLocators = require("../locators/Login.locators.js");
const HomeScreenLocators = require("../locators/HomeScreen.locators.js");
const randomFirstName = faker.person.firstName()
const randomLastName = faker.person.lastName()

class LoginPage {
    constructor(page){
        this.page = page
        this.signupUsername = page.locator(LoginLocators.NEWUSERNAME_IN)
        this.signupEmail = page.locator(LoginLocators.NEWEMAIL_IN)
        this.signUpBt = page.locator(LoginLocators.SIGNUP_BT)
        this.passwordInput = page.locator(LoginLocators.PASSWORD_IN);
        this.dayInput = page.locator(LoginLocators.DAY_IN);
        this.monthInput = page.locator(LoginLocators.MONTH_IN);
        this.yearInput = page.locator(LoginLocators.YEAR_IN);
        this.firstNameInput = page.locator(LoginLocators.FIRSTNAME_IN);
        this.lastNameInput = page.locator(LoginLocators.LASTNAME_IN);
        this.addressInput = page.locator(LoginLocators.ADRESS_IN);
        this.countrySelect = page.locator(LoginLocators.COUNTRY_IN);
        this.stateIn = page.locator(LoginLocators.STATE_IN);
        this.cityInput = page.locator(LoginLocators.CITY_IN);
        this.zipCodeInput = page.locator(LoginLocators.ZIPCODE_IN);
        this.mobileInput = page.locator(LoginLocators.MOBILE_IN);
        this.createAccountButton = page.locator(LoginLocators.CREATEACCOUNT_BT);
        this.continueBt = page.locator(LoginLocators.CONTINUE_BT)
        this.signupLoginbt = page.locator(HomeScreenLocators.SIGNUPLOGIN_BT)
        this.loginEmail = page.locator(LoginLocators.LOGINEMAIL)
        this.loginPassword = page.locator(LoginLocators.LOGINPASSWORD)
        this.loginBt = page.locator(LoginLocators.LOGIN_BT)
    }

    async fillNewUserSignUpForm(){
        await this.signupUsername.fill(randomFirstName + randomLastName)
        await this.signupEmail.fill(randomFirstName + randomLastName + "@fakeemail.com")
        await this.signUpBt.click()
    }

    async fillSignUpForm(){
        await this.passwordInput.fill('12345678')
        await this.dayInput.selectOption('18')
        await this.monthInput.selectOption('11')
        await this.yearInput.selectOption('1997')
        await this.firstNameInput.fill(randomFirstName)
        await this.lastNameInput.fill(randomLastName)
        await this.addressInput.fill('Address')
        await this.countrySelect.selectOption('United States')
        await this.stateIn.fill('FL')
        await this.cityInput.fill('Miami')
        await this.zipCodeInput.fill('33156')
        await this.mobileInput.fill('2222222222')
        await this.createAccountButton.click()
        await this.continueBt.click()
    }

    async loginWithJustCreatedUser(){
        await this.signupLoginbt.click()
        await this.loginEmail.fill(randomFirstName + randomLastName + "@fakeemail.com")
        await this.loginPassword.fill('12345678')
        await this.loginBt.click()
    }
}

module.exports = {LoginPage}