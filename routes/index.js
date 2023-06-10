const express = (require('express'))
const router = express.Router()
const {lookup, addGuest} = require('../controllers/guestInfo')

router.get('/dashboard', function(req,res){
    res.render('dashboard',{title:"Home Page"});
})

router.post('/addGuest',addGuest);
router.get('/lookup',lookup);


module.exports = router