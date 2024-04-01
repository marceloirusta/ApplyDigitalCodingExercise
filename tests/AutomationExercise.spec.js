const { test } = require("@playwright/test");
const { PageManager } = require("../pageManager/PageManager");

test('Apply digital user flow', async({browser})=>{
    const context = await browser.newContext()
    const page =  await context.newPage()
    page.on('popup', async popup => {
        console.log('Pop-up detected. Closing it.');
        await popup.close();
    });
    const pageManager = new PageManager(page)

    const homeScreenPage = pageManager.getHomeScreenPage()
    await homeScreenPage.goTo()
    await homeScreenPage.scrollDownHalfwayThrough()
    await homeScreenPage.chooseFirstProduct()

    const detailsPage = pageManager.getProductDetailsPage()
    await detailsPage.enterProductQuantity()
    await detailsPage.addToCartAndProceed()

    const cartPage = pageManager.getCartPage()
    await cartPage.clickOnProceedToCheckout()
    await cartPage.clickOnRegisterLogin()

    const loginPage = pageManager.getLoginPage()
    await loginPage.fillNewUserSignUpForm()
    await loginPage.fillSignUpForm()

    await homeScreenPage.clickOnCart()
    await cartPage.clickOnProceedToCheckout()
    await cartPage.addPlaceOrderCommentAndProceed()

    const paymentPage = pageManager.getPaymentPage()
    await paymentPage.fillPaymentDetailsAndPay()

    await homeScreenPage.logout()
    await loginPage.loginWithJustCreatedUser()

    const contactPage = pageManager.getContactPage()
    await contactPage.fillAContactForm()

    await homeScreenPage.logout()
})