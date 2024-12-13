
const User = require('../models/User');
const userView = require('../views/UserView');
const loginView = require('../views/loginView');
const registerView = require('../views/registerView');
const profileView = require('../views/profileView');



        function getUser(req,res){
            const user = new User(1,"tim","test");
            res.end(userView(user));
            
        }

        function showLogin(req,res){
            res.end(loginView());
        }

        function showRegister(req,res){
            res.end(registerView());
        }

        function traitLogin(req,res){
            const {name,password}= req.body;
            const cookie_U = req.cookies.username;
            const cookie_P = req.cookies.password;
            //console.log(cookie_U+cookie_P);
            
            if(name===cookie_U && password === cookie_P){
                
                    
                        res.location.href='localhost:3000/Profile';

            }else{
                res.send("error wrong username or password !");
            }
            
        }

        function traitRegister(req,res){
            const {name,password} = req.body
            if((name != []) && (password != [])){
                res.cookie('username', name);
                res.cookie('password', password);
                res.send("enregistrement ok !");
                
            }else{
                res.send("Veuillez remplire tous les champs");
            }
        }

        function showProfile(req,res){
            res.end(profileView());
        }
        
module.exports = {getUser,showLogin,traitLogin,showRegister,traitRegister,showProfile};