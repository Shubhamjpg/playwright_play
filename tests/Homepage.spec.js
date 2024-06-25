//const {test, expect} = require('@playwright/test')
import {test , expect} from '@playwright/test'

test ('Home page' , async ({page})=>{

   await page.goto("https://demoblaze.com/index.html")

   //click on logi btton 
   //await page.locator('id=login2').click()
     await page.click('id=login2')

     // provide username 

     // provide username by CSS
     //await page.locator('#loginusername').fill("shubh")

    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','shubh')
    
    // provide password  by css

    await page.fill("input[id='loginpassword']",'test@123')


    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')
   // verified logout link

    const logoutlink = await page.locator('//*[@id="logout2"]')


    await expect(logoutlink).toBeVisible();

    await page.close()
//*[@id="logout2"]


})
