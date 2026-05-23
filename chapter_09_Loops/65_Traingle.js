let a=10;
let b=16;
let c=19;
if (a===b&&b===c&&a===c)
{
    console.log("Three sides are equal.Traingle is called Equilateral.")
}
else if(a===b||b===c||a===c)
    {
console.log("Two Sides are equal.Triangle is called Isoceles.");
}
else
  console.log("no sides are equal.Triangle is called Scalene.");