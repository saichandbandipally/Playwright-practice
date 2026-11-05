import { test } from "@playwright/test";
import { count } from "node:console";
// test("dropdowns",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     await page.locator('//select[@id="select3"]').selectOption("India") //targeting through visible text
//     await page.locator('//select[@id="select5"]').selectOption({label:"Telangana"}) //! through label
//     await page.locator('(//select)[5]').selectOption({value:"Karimnagar"})

// })

// test("multi select dropdowns",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//     await page.locator('//select[@id="select-multiple-native"]').selectOption(["Mens Casual Premium ...","Mens Cotton Jacket..."])
//     await page.getByRole("button",{name:"Add"}).click()
//     let arr=["Mens Casual Premium ...","Mens Cotton Jacket..."]

    
//     if ( await page.locator('//table/tbody/tr').count()==arr.length){
//         console.log("count of elements =",arr.length);
        
        
//     }
    

// })


// test("custom drop downs",async({page})=>{
//    await  page.goto("https://www.amazon.com/s?k=samsung+s25&crid=HMCYOOPP8ANC&sprefix=%2Caps%2C247&ref=nb_sb_ss_recent_1_0_recent")
//    await  page.locator('//span[@id="a-autoid-0-announce"]').click()
//    await page.locator('(//a[text()="Best Sellers"])[1]').click()

// })



test("auto suggestions",async({page})=>{
    await page.goto("https://www.bigbasket.com/")
    await page.locator('(//input[@placeholder="Search for Products..."])[2]').fill("mangoes")
    await page.locator('//span[text()="Kesar Mango"]').click()
    await page.locator('(//button[text()="Add to basket"])[1]').click()

})