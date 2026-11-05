import { test } from "@playwright/test";

// test("browser",async ({context})=>{
//     let p1= await context.newPage()
//      await p1.goto("https://www.youtube.com/")
//     let arr=  await context.cookies()
//     console.log(arr);
//     await context.clearCookies()
//     console.log(await context.cookies());
    
// context.addCookies([{
//     name: 'PREF',
//     value: 'f4=4000000&tz=Asia.Calcutta',
//     domain: '.youtube.com',
//     path: '/',
//     expires: 1826089771.319885,
//     httpOnly: false,
//     secure: true,
//     sameSite: 'Lax'
//   }]



// })


// test.only("page methods", async ({page})=>{
//    console.log(await page.viewportSize());

// //    await page.setViewportSize({
// //         width:500,
// //         height:500
// //     })
//    await page.goto("https://www.amazon.com/")
//    await page.waitForTimeout(4000)
//    await page.screenshot()
//    await page.screenshot({path:`sreenshot ${Math.floor(Math.random()*100)}.jpeg`})
//    await page.screenshot({path:"screenshots/sshot.jpg"})
//    await page.screenshot({path:"screenshots/ss.jpg",fullPage:true})
//    await page.goBack()
//    await page.goForward()
//    await page.reload()

// })


test("browser controls",async({browser})=>{
   let context_1 =  await browser.newContext()
   let new_page= await context_1.newPage()
   await new_page.setViewportSize({
      width:1280,
      height:720
   })
   await new_page.goto("https://github.com/")
   await new_page.screenshot({path:"screenshots/github.jpeg"})
   browser.close()

})