import { test as base , expect} from "@playwright/test";

let test = base.extend({
    logInFixture : async({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page.locator('//input[@placeholder="Username"]').fill("standard_user")
        await page.locator('[placeholder="Password"]').fill("secret_sauce")
        await page.locator('[id="login-button"]').click()
        await use(page)


    }
})

export {
    test,expect
}