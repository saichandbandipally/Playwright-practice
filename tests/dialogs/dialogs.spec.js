import { expect, test } from "@playwright/test";
import { type } from "node:os";

test("alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // page.once("dialog",async(dia)=>{
    // let type = await  dia.type()
    // expect(type).toContain("alert")
    // let msg = dia.message()
    // expect(msg).toContain("I am an alert box!")
    // await  dia.accept()


    // })

    page.on("dialog",async(dia)=>{
        let type1=dia.type()
        expect(type1).toContain("prompt")
        let defaultmsg=dia.defaultValue()
        expect(defaultmsg).toContain("Harry Potter")
        let msg=dia.message()
        expect(msg).toContain("Please enter your name:")
        await dia.accept("Sai Chand")


    })
    await page.locator('//button[text()="Prompt Alert"]').click()
    await page.locator('//button[text()="Prompt Alert"]').click()
    let text=await page.locator('#demo').textContent()
    expect.soft(text, "checking text").toContain(" dfghj Hello Sai Chand! How are you today?")
    // await expect( page.locator('#demo')).toHaveText()
    // await expect(page).
    await page.waitForTimeout(2000)

  

})