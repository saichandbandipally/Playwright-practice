import {test ,expect } from "@playwright/test";
//absolute xpath
// test("sselectors", async({page})=>{
//    await page.goto("https://www.saucedemo.com/")
//    await page.locator("//html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input").fill("standard_user")
//    await page.locator("//html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input").fill("secret_sauce")
//    await page.locator("//html/body/div/div/div[2]/div[1]/div/div/form/input").click()
//   })

//Relative xpath by attribute

//   test("xpathselectors", async({page})=>{
//    await page.goto("https://www.facebook.com/")
//    await page.locator('//input[@autocomplete="username webauthn"]').fill("standard_user")
//    await page.locator('//input[@type="password"]').fill("secret_sauce")
//    await page.locator('(//span[@class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"])[1]').click()
//   })

//Relative Xpath by visible text 

//   test("xpathselectors", async({page})=>{
//    await page.goto("https://www.bigbasket.com/")
//    await page.locator('(//span[text()="Exotic Fruits & Veggies"])[1]').click()

//    await page.waitForTimeout(3000)
//    if (page.url()=="https://www.bigbasket.com/pc/fruits-vegetables/exotic-fruits-veggies/") {
//     console.log("validation passed");
//    }

//   })


//  test("xpathselectors", async({page})=>{
//    await page.goto("https://www.amazon.com/")
//    await page.locator('//a[starts-with(text(),"Gift Car")]').click()

//   })


//Index method 

//  test("xpathselectors", async({page})=>{
//    await page.goto("https://www.bigbasket.com/")
//    await page.locator('(//input[@placeholder="Search for Products..."])[1]').fill("boost")
//    await page.keyboard.press("Enter")
//    await page.locator('(//span[text()="Boost"])[last()-3]').click()

//   })


//Traversing 

//  test("xpathselectors", async({page})=>{
//    await page.goto("https://www.flipkart.com/")
//    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill("samsung s25")
//    await page.keyboard.press("Enter")
//   let content = await page.locator('//div[text()="Samsung Galaxy S25 5G Snapdragon (Silver Shadow, 256 GB)"]/../..//div[@class="hZ3P6w DeU9vF"]').textContent()
// console.log(content);

//   })



//! Xpath by Axes : 

// test("xpathselectors", async({page})=>{
//    await page.goto("https://www.flipkart.com/")
//    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill("samsung s25")
//    await page.keyboard.press("Enter")
//   let content = await page.locator('//div[text()="Samsung Galaxy S25 5G Snapdragon (Silver Shadow, 256 GB)"]/ancestor::div[@class="ZFwe0M row"]/descendant::div[@class="hZ3P6w DeU9vF"]').textContent()
// console.log(content);

//   })



//^ Using following-sibling , parent and descendant  axes 

// test("xpathselectors", async({page})=>{
//    await page.goto("https://www.flipkart.com/")
//    await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill("samsung s25")
//    await page.keyboard.press("Enter")
//   let content = await page.locator('//div[text()="Samsung Galaxy S25 5G Snapdragon (Silver Shadow, 256 GB)"]/parent::div[@class="col col-7-12"]/following-sibling::div[@class="col col-5-12 mao5dl"]/descendant ::div[@class="hZ3P6w DeU9vF"]').textContent()
// console.log(content);

//   })


//! Targeting svg elements 


// test("svg element",async({page})=>{
//     await page.goto("https://www.nykaa.com/")
//     await page.locator('//span[text()="Gift Card"]/preceding-sibling::span//*[name()="svg"]').click()

// })

test("or ",async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.locator('//input[@placeholder="Username" or @name="username"]').fill("Admin")
   await page.locator('//input[@type="password" and @name="password"]').fill("admin123")
   await page.locator('//button[@type="submit"]').click()

})