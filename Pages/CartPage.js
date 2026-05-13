const { expect } = require('@playwright/test');
exports.CartPage=class CartPage
{
    constructor(page)
    {
        this.page=page
        this.cartProductName = page.locator(".inventory_item_name");
        this.checkout=page.locator("[id='checkout']")
    }
    
    async verifycartproductname(expectedProductname)
    {
        await expect(this.cartProductName).toHaveText(expectedProductname)
    }
    async clickcheckout()
    {
        await this.checkout.click()
    }
    
}