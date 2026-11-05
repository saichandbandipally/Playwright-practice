import { test} from "@playwright/test";
test("Calender",async({page})=>{
    await page.goto("https://www.easemytrip.com/")
    await page.locator('//p[text()=" From"]').click()
    await page.locator('//input[@id="a_FromSector_show"]').fill("Hyderabad")
    await page.locator('(//span[text()="Hyderabad(HYD)"])[1]').click()
    // await page.locator('//p[text()=" To"]').click()
    await page.locator('//input[@id="a_Editbox13_show"]').fill("Mumbai")
    await page.locator('#toautoFill').getByText('Mumbai(BOM)').click()
    let month
    while (month!="Mar 2027") {
            month = await page.locator('(//div[@class="month2"])[2]').textContent()
            console.log(month);
            
            await page.locator('//img[@id="img2Nex"]').click()

    }
    await page.locator('//div[text()="Mar 2027"]/ancestor::div[@class="box"]/descendant::li[text()="10"]').click()


})