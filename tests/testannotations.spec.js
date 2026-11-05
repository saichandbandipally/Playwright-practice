import { test } from "@playwright/test";
import { log } from "console";
// test.only("test1",()=>{
//     console.log("test 1 executed");
    
// })  test 1 executed

// test.skip("test2",()=>{
//     console.log("test 2 executed");
    
// })  

// test.fixme("test3",()=>{
//     console.log("test 3 executed");
    
// })

// test.fail("test4", async ({page})=>{
//     await page.goto("https://sljdfd.com")
    
// })  

//output for the above script :  2 skipped  1 passed (2.7s)


test("test slow",async({page})=>{
    test.slow()
    await page.goto("https://www.saucedemo.com/")
    await page.locator('//input[@class="123er"]').fill("sai")

})   //! Waited for 9 sec as used test.slow() and configured timeout is 3 sec