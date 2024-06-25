import {test,expect} from '@playwright/test'
import { log } from 'console';

test('find link', async ({page})=>{

  await page.goto('https://demoblaze.com/index.html')

  const waiitselector = await page.waitForSelector("//div[@id='tbodyid']//h4/a")
  console.log(waiitselector);
  const products =  await page.$$("//div[@id='tbodyid']//h4/a")
  
  for (const product of products) {
    const prodname = await product.textContent();
    console.log(prodname);
    
  }
})

test('self create',async ({page})=>{



}
)
