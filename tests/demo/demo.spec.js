import {test,expect} from "../../Custom_fixtures/logIn_fixture"
test("title1",async({logInFixture})=>{
    await expect(logInFixture.locator('.title')).toBeVisible()
    await logInFixture.waitForTimeout(2000)
    


})

