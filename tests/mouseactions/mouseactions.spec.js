import { test } from "@playwright/test";

/* Mouse actions 
  click() 
  wheel()
  dblclick()
  move()
  up()
  down()
hover()
*/
// test("mouse actions",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
//     await page.locator('//button[text()="Right Click"]').click({button:"right"})


// })

// test.only("double click",async({page})=>{
//     // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
//     // // await page.locator('//button[text()="Yes"]').click({clickCount:2})
//     // await page.locator('//button[text()="Yes"]').dblclick()


//     await  page.goto("https://www.flipkart.com/")
//     await page.mouse.click(33,44)


// })

// test("up and down methods /hold and release",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
//     await page.locator('//div[@id="circle"]').hover()
//     await page.mouse.down()
//     await page.waitForTimeout(3000)
//     await page.mouse.up()

// })

// test("scroll",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
//   await page.mouse.wheel(0,800)
//   await page.mouse.wheel(0,-200)
//   await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()

// })


// test("mouse actions",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
//   await page.locator('//div[text()="Drag Me"]').hover()
//   let box =   await page.locator('//div[text()="Drag Me"]').boundingBox()
//   console.log(box);
//   await page.mouse.down()
//   await page.mouse.move(100,100)


// })



test("drag",async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
  await page.locator('//div[text()="Mobile Charger"]').hover()
  await page.mouse.down()
  await page.locator('//div[text()="Mobile Accessories"]/..').hover()
  await page.mouse.up()
  //! DragTo
  await  page.locator('//div[text()="Laptop Charger"]').dragTo(page.locator('//div[text()="Laptop Accessories"]/..'))
  //* DragAndDrop
  await page.dragAndDrop('//div[text()="Laptop Cover"]','//div[text()="Laptop Accessories"]/..')

})



