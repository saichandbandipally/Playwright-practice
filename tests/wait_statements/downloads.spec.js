import { test } from "@playwright/test";
test("downloads", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("Hi Iam Sai Chand Bandipally")
    let [dwnld] = await Promise.all([
        page.waitForEvent("download"),
        page.locator('//button[@id="downloadButton"]').click()

    ])
    await  dwnld.saveAs("downloads/textparagrah.pdf")
    await dwnld.saveAs(`downloads/ ${dwnld.suggestedFilename()}`)
    

})