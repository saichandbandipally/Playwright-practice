import {test  } from "@playwright/test";
test("permissons",async({context})=>{
    // let context =  await browser.newContext({
    //     permissions:["camera","microphone","geolocation"]

    // })
    // await context.grantPermissions(["camera","microphone"])
    let page = await context.newPage()
    await page.goto("https://thetest.com/")
    await page.locator('//button[text()="Start Permissions Test"]').click()
    await page.locator('//button[text()="Request Remaining"]').click()
    await page.waitForTimeout(3000)


})