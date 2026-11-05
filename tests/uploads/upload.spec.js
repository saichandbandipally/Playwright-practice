import { test } from "@playwright/test";
import path from "node:path";
// test("upload file",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/Pranay/OneDrive/Desktop/test.xlsx")
//     await page.locator('//button[text()="Upload Single File"]').click()

// })

// test("upload file",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/Pranay/OneDrive/Desktop/test.xlsx", "C:/Users/Pranay/OneDrive/Desktop/test2.xlsx"])
//     await page.locator('//button[text()="Upload Multiple Files"]').click()

// })


test("upload from folder",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([path.join(__dirname,"../../downloads/ mytextfile.txt"),path.join(__dirname,"../../downloads/textparagrah.pdf")])
    await page.locator('//button[text()="Upload Multiple Files"]').click()

})



