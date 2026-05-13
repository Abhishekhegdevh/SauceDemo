const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.Username = page.locator("[id='user-name']");
        this.password = page.locator("[id='password']");
        this.loginbutton = page.locator("[id='login-button']");
        this.errormessage = page.locator("[data-test='error']");
    }
    async gotoLoginpage() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(username, password) {
        await this.Username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

    async verifyerrormessage(expectederrormessage) {
        await expect(this.errormessage).toHaveText(expectederrormessage)
    }
}
