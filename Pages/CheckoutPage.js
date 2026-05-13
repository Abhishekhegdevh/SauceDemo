const { expect } = require('@playwright/test');
exports.CheckoutPage=class CheckoutPage
{
constructor(page)
{
    this.page=page
    this.firstNameInput=page.locator("[data-test='firstName']")
    this.lastNameInput = page.locator("[data-test='lastName']")
    this.postalCodeINput=page.locator("[data-test='postalCode']")
this .continuebutton=page.locator("[id='continue']")
this.finishbutton=page.locator("[id='finish']")
this.successMessage=page.locator("//h2[text()='Thank you for your order!']")
this.backhome=page.locator("[id='back-to-products']")


}
async entercheckoutdetails(firstname,lastname,postalcode)
{
    await this.firstNameInput.fill(firstname)
    await this.lastNameInput.fill(lastname)
    await this.postalCodeINput.fill(postalcode)
}
async clickcontinuebutton()
{
    await this.continuebutton.click()
}
async clickfinishbutton()
{
    await this.finishbutton.click()
}
async verifyordersuccessfullMessage(expectedMessage)
{
    await expect(this.successMessage).toHaveText(expectedMessage)
}
async clickbackhomebutton()
{
    await this.backhome.click()
}
}