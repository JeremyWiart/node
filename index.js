const {getUser,showLogin,traitLogin,showRegister,traitRegister,showProfile} = require('./controllers/UserController');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/user',(req,res)=>{
    getUser(req,res);

})

app.get('/Register',showRegister)

app.post('/Register',traitRegister)

app.get('/Login',showLogin)

app.post('/Login',traitLogin)

app.get('/Profile',showProfile)

app.listen(3000,()=>{})

