 import { test } from "@playwright/test";
 test("press",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator('//input[@placeholder="Enter your name"]').click()
    await page.locator('//input[@placeholder="Enter your name"]').focus()
    await page.keyboard.type("Sai Chand")
    await page.keyboard.down("Control")
    await page.keyboard.down("KeyA")
    await page.keyboard.press("Control+c")
    await page.keyboard.up("Control")
    await page.keyboard.up("KeyA")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.type("@gmail.com")
    await page.keyboard.press("Tab")
    await page.keyboard.insertText("Saiche")



 })