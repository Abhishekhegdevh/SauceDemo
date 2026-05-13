const { expect } = require('@playwright/test');
exports.LogoutPage=class LogoutPage
{
    constructor(page)
    {
        this.page=page
        this.menuButton=page.locator("[id='react-burger-menu-btn']")
        this.logoutbutton=page.locator("//a[text()='Logout']")

    }
    async  clickopenMenu()
    {
        await this.menuButton.click()
    }
    async clicklogoutbutton()
    {
        await this.logoutbutton.click()
    }
}