const express =require('express');
const cookieParser=require("cookie-parser");


const app = express();
const port = 1400;


app.use (cookieParser());
app.get('/set-cookie',(req,res)=>{
    res.cookie('username',"jhon Doe",{maxAge:3600000})
    res.send("set a cookie")
})

app.get("/get-cookie",(req,res)=>{
    const username = req.cookies.username;
    if(username){
        res.send(`user name is:${username}`);
    }else{
        res.send('no username cookie found')
    }

})




app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
});
