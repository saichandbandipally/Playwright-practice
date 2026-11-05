import { test } from "@playwright/test";
// test.use({
//     actionTimeout:5000,
// }
// )
// test("test slow",async({page})=>{
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator('//input[@class="123er"]').fill("sai",{timeout:2000})

// })  //! test fails in 2 seconds as it is not able to locate element within 2seconds 

test("test slow",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('//input[@class="123er"]').fill("sai")

})  //! test fails in 5 seconds as file timeout for actions used is 5 seconds 



