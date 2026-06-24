const ENV={
    BASE_URL:https://staging.myapp.com",
    TIMEOUT:5000,
    RETRIES:2,
    BROWSER:"Chrome"
}

const Expected_Response={
    status: 200,
    body:{
        user:{role:"admin",active:true}
    }

}
const config={
    //BASE_URLS
    baseUrl:"https://localhost:3000",
    apibaseUrl:"https://localhost:3000/api",

    test_user:{
        userName:'test@example.com',
        password:"SecurPass123"

    },

//logging
loglevel:'INFO',
//Retry Config
retryCount:parseInt(process.env.retryCount||'3',10),
};

