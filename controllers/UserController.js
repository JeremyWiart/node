
const User = require('../models/User');
const userView = require('../views/UserView');
const loginView = require('../views/loginView');
const registerView = require('../views/registerView');
const cookies="";

    function getCookie(nom){
        nom = nom + "=";
        let liste = document.cookies.split(';');
        
            for (let i = 0; i < liste.length; i++){
                let c = liste[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nom) == 0) return c.substring(nom.length, c.length);
            }
                return null;
    }


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
            console.log(cookie_U+cookie_P);
            
            if(name===cookie_U && password === cookie_P){
                res.send("Bienvenue ! "+cookie_U);
            }else{
                res.send("error wrong username or password !");
            }
            
        }

        function traitRegister(req,res){
            const {name,password} = req.body
            if(name != NULL && password != NULL){
                res.cookie('username', name);
                res.cookie('password', password);
                res.send("enregistrement ok !");
            }
        }
        
module.exports = {getUser,showLogin,traitLogin,showRegister,traitRegister};