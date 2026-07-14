async function testresult(){
    return "Passed";
}
testresult().then(function(result){
    console.log(result);
});


// import {test} from '@playwright/test';

// test('title Validation',async({page})=>{
//     await page.goto("https://www.google.com");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google");

// });

