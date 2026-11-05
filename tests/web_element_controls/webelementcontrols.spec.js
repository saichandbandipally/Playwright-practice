import { test } from "@playwright/test";

// test('testID',async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui")
//     await page.getByLabel("Name").type("chand")
//     await page.getByLabel("Name").fill("sai")
//     await page.waitForTimeout(2000)
//     await page.getByPlaceholder("Enter Your Email").fill("sai@gmail")
//     await page.getByPlaceholder("Enter Your Email").type(".com")
//     await page.getByLabel("Password").pressSequentially("Password")
//     await page.getByRole("button",{name:"Register"}).click()
   

// })


// test('testID',async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/")
//     await page.locator('//input[@name="NewsletterEmail"]').fill("sai@gmail.com")
//     await page.getByRole("button",{name:"Subscribe"}).click()
//    let a= await page.locator('//div[@class="newsletter-result-block"]').innerText()
//    console.log(a);
   
//    if (a.includes("Thank you")) {
//     console.log("subscription sucess");
    
    
//    }
//    await page.getByLabel("Excellent").check()
//    await page.getByRole("button",{name:"Vote"}).click()
//    let b=  await page.getByText("Only registered users can vote.").textContent()
//    if (b.includes("Only registered users")) {
//     console.log("only registered users can vote ");
    
//    }

//    await page.locator('(//a[@href="/gift-cards"])[1]').click()
//    await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[4]').click()
//    await page.locator('//input[@class="recipient-name"]').fill("sai")
//    await page.getByLabel("Your Name:").fill("sai chand")
//    await page.getByLabel("Message:").fill("fast delivery")
//    await page.locator('(//input[@value="Add to cart"])[1]').click()

// })


test("qspidersdemo",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('//section[text()="Check Box"]').click()
    await page.locator('//input[@id="domain_b"]').check()
    let a= await page.locator('//input[@id="domain_b"]').isChecked()
    if (a==true) {
    console.log("checked");
   }
   else {
    throw new Error("button is not checked ")
   }
    await page.locator('//input[@id="mode_b"]').check()
    await page.locator('//input[@id="mode_b"]').click()
    if (page.locator('//input[@id="mode_b"]').isChecked==false) {
        console.log("Button is unchecked"); 
    }
    else{
        throw new Error("button is checked")
    }
    await page.locator('//input[@id="mode_c"]').isVisible()
    if (page.locator('//input[@id="mode_c"]').isVisible()) {
        await page.locator('//input[@id="mode_c"]').click()
        
    }
    else{
        throw new Error("flipper button not visible")
    }
    await page.locator('//input[@id="mode_f"]').isEnabled()
    if (page.locator('//input[@id="mode_f"]').isEnabled()) {
        await page.locator('//input[@id="mode_f"]').click()
        
    }
     else{
        throw new Error("flipper button not visible")
    }

    await page.getByRole("button",{name:"Continue"})




    

})


