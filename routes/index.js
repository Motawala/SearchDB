const express = (require('express'))
const router = express.Router()
const {lookup, addGuest} = require('../controllers/guestInfo')

router.get('/', function(req,res){
    res.render('dashboard',{title:"Home Page"});
})

router.post('/addGuest',addGuest);
router.post('/lookup',lookup);


module.exports = router