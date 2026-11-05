import {test  } from "@playwright/test";
// test("wait statements",async({page})=>{
//     // await page.goto("https://www.flipkart.com/")
//     // await page.locator('//input[@id="1"]').waitFor({state:"attached"})
//     // // await page.locator('//input[@id="1"]').waitFor({state:"detached"})
//     // await page.locator('//span[@class="b3wTlE"]').click()
//     // await page.locator('//input[@id="1"]').waitFor({state:"detached"})

//     await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1")
//     await page.locator('//button[text()="Start"]').click()
//     await page.locator('//img[@src="/img/ajax-loader.gif"]').waitFor() //! By default it will wait until the element is visible
//     // await page.locator('//img[@src="/img/ajax-loader.gif"]').waitFor({state:"hidden"})
//     await page.locator('//img[@src="/img/ajax-loader.gif"]').waitFor({state:"detached"})
//     await page.locator('//h4[text()="Hello World!"]').waitFor()
   
// }
// )



//! Waitforloadstatement

test("wait for load statement",async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('//textarea[@class="gLFyf"]').fill("mahindra thar")
    // await page.keyboard.press("Enter")
    await page.waitForLoadState("networkidle")

})