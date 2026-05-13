//Template literals are a powerful feature in JavaScript that allow you to create strings with embedded expressions and multi-line strings more easily. They are defined using backticks (`) instead of single or double quotes. Template literals can include placeholders for variables and expressions, which are denoted by the `${}` syntax. This makes it easier to construct complex strings without needing to concatenate multiple parts together.

let firstName="John";
let lastName="Doe";
// Template literal using backticks and ${} for interpolation
let fullName=`${firstName} ${lastName}`;
console.log("Full Name:", fullName);        

const env="production";
const apiUrl=`https://${env}.api.example.com`;
console.log("API URL:", apiUrl);    

const status="success";
const Testcase="Login Test";
const message=`The status of ${Testcase} is ${status}`;
console.log("Message:", message);