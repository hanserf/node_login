const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")

//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
// dashboard
router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    });
    setTimeout((function() {  
        return process.kill(process.pid);
    }), 5000);
})

module.exports = router; 