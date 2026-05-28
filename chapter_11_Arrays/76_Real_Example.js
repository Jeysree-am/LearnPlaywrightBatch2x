let browser=["Chrome","edge","Firefox","Opera","safari"];
console.log(browser.length);
console.log(browser);
browser.pop();
console.log(browser);
let removed=browser.shift();
console.log(removed);
console.log(browser);




for (let n = 0; n < browser.length; n++)
{
    console.log(browser[n]);
    if(browser[n]==="Opera")
    {
        console.log("Opera is no longer suppored by Selenium");

    }
}
