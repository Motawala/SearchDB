const express = (require('express'))
const router = express.Router()
const {lookup, addGuest} = require('../controllers/guestInfo')

router.get('/', function(req,res){
    res.render('dashboard',{title:"Home Page"});
})

//This Post request adds name to the Database
router.post('/addGuest',addGuest);

//This post request searches for the name in the database
router.post('/lookup',lookup);


module.exports = router