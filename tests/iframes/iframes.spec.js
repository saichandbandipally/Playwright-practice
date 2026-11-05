import { test } from "@playwright/test";
// test("iframes",async({page})=>{
//     await page.goto("https://vinothqaacademy.com/iframe/")
//     await page.frameLocator('(//iframe[@class="entered litespeed-loaded"])[1]').locator('//input[@id="nameInput"]').fill("sai chand")

//     //* using frame() method 
//     let f1= page.frame({name:"employeetable"})
//     await f1.locator('//input[@id="roleInput"]').fill("student")
//     let f3=page.frame({url:"https://vinothqaacademy.com/demo-site/"})
//     await f3.locator('(//input[@class="vfb-text  vfb-medium  required  "])[1]').fill("sai")

//     //* using frames() method 
//     let af=page.frames()
//     await af[3].locator('(//input[@class="vfb-text  vfb-medium  required  "])[2]').fill("Bandipally")




// })

test("nested frame",async({page})=>{
    await page.goto("https://www.dezlearn.com/nested-iframes-example/")
    let p=page.frame({name:"demo_parent_iframe"})
    let child = p.childFrames()
    await child[0].locator('//button[@id="u_5_6"]').click()

})