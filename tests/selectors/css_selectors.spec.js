import {test ,expect } from "@playwright/test";

test("sselectors", async({page})=>{
   await page.goto("https://www.saucedemo.com/")
   await page.locator('[placeholder="Username"]').fill("standard_user")
   await page.locator('input#password').fill("secret_sauce")
   await page.locator('input[data-test="login-button"]').click()
   if (await page.url()=="https://www.saucedemo.com/inventory.html") {
    console.log("login sucessfull");
    
    
   }
   else{
    console.log("login unsucessfull");
    
   }
   await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click()
   await page.locator('a.shopping_cart_link').click()
   await expect (page.locator('div.inventory_item_name'))
   await page.goBack()
   await page.locator("a#logout_sidebar_link").click()
   
    // await page.locator('a."shopping_cart_link"')
})