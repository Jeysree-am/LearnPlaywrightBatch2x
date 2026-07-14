import{test,expect} from'@playwright/test';
test('Test for CURA Healthcare Service',async({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await expect(page).toHaveTitle('CURA Healthcare Service');
    let appointmentButton=page.locator('xpath=//a[@id="btn-make-appointment"]');
    await appointmentButton.click();
    let username=page.locator('xpath=//input[@id="txt-username"]');
    let password=page.locator('xpath=//input[@id="txt-password"]'); 
    let loginButton=page.locator('xpath=//button[@id="btn-login"]');
    await username.fill('John Doe');
    await password.fill('ThisIsNotAPassword');
    await loginButton.click();
    let facility=page.locator('xpath=//select[@id="combo_facility"]');
    let hospitalReadmission=page.locator('xpath=//input[@id="chk_hospotal_readmission"]');
    let healthcareProgram=page.locator('xpath=//input[@id="radio_program_medicare"]');
    let visitDate=page.locator('xpath=//input[@id="txt_visit_date"]');
    let commnet=page.locator('xpath=//textarea[@id="txt_comment"]');   
    let bookAppointmentButton=page.locator('xpath=//button[@id="btn-book-appointment"]');

}
); 

