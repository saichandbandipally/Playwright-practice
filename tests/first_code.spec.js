import {chromium, test  } from "@playwright/test";

test ("title",async()=>{
    let browser= await chromium.launch()
    let context= await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://www.youtube.com/")
    await page.waitForTimeout(3000)
})

test ("title2",async()=>{
    let browser= await chromium.launch()
    let context= await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://www.youtube.com/")
    await page.waitForTimeout(3000)
})

test ("title3",async()=>{
    let browser= await chromium.launch()
    let context= await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://www.youtube.com/")
    await page.waitForTimeout(3000)
})