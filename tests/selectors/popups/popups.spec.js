import { test } from "@playwright/test";


test("popups",async({page})=>{
   await  page.goto("https://www.amazon.in/s?k=air+conditioner&crid=1IKHPA7SM8HH2&sprefix=air+conditioner+%2Caps%2C278&ref=nb_sb_noss_2")
   let [new_page] =await  Promise.all([
     page.waitForEvent('popup'),
     page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"])[3]').click()

   ])
   await new_page.locator('(//input[@id="add-to-cart-button"])[2]').click()
   if (await new_page.locator('//h1[@class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]').isVisible()) {
    console.log("product added to cart");
    
    
   }
   

})