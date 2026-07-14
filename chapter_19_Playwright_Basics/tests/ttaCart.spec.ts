import{test,expect} from'@playwright/test';

test('Test for TTA Cart',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login")
    await expect(page.getByRole("heading", { name: "TTACart" })).toBeVisible();


});