/*
• page.getByRole() to locate by explicit and implicit accessibility attributes.
  locate element get by role like button select box someting like that 
• page.getByText() to locate by text content.

• page.getByLabel() to locate a form control by associated label's text.

• page.getByPlaceholder() to locate an input by placeholder.

• page.getByAltText() to locate an element, usually image, by its text alternative.
check to logo or any text 
• page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/




import {test,expect} from '@playwright/test'

/*

test('test1', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    const logo =  await page.getByAltText('company-branding')
    await console.log(logo);
    await expect(logo).toBeVisible();

})
*/
test('username and passwotd',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    const logo =  await page.getByAltText('company-branding')
    await console.log(logo);
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')
    await page.waitForTimeout(100)
    await page.getByRole('button',{type:'submit'}).click
 

})