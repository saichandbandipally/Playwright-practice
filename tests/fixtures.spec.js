import { test } from "@playwright/test";
import { log } from "node:console";
// //page fixture
// test("pageFixture",async({page})=>{
// // await page.goto("https://www.youtube.com/")
// //launching 2 applications 
// await page.goto("https://www.youtube.com/")
// await page.goto("https://blinkit.com/")
// })
//context fixture


test("contextFixture",async({context ,browserName})=>{
// await page.goto("https://www.youtube.com/")
//launching 2 applications 
let youtube = await context.newPage()
 await youtube.goto("https://www.youtube.com/")
let blinkit = await context.newPage()
await blinkit.goto("https://blinkit.com/")
console.log(browserName);

})

// !  browser fixture 

// test("browser fixture", async ({browser})=>{
//     let c1 =  await browser.newContext()
//     let p1=await c1.newPage()
//     await p1.goto("https://www.youtube.com/")
//     let c2= await browser.newContext()
//     let p2= await c2.newPage()
//     await p2.goto("https://www.youtube.com/")
// })