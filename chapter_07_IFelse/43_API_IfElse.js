let status_code=400;
if(status_code===200)
{
    console.log("Success");
}
else if(status_code===400)
{
    console.log("Bad Request");
}
else if(status_code===500)
{
    console.log("Internal Server Error");
}   
else
{
    console.log("Unknown Status");
}