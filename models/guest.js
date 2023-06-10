const mongoose = require('mongoose')


const guestSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    }
})


module.exports = mongoose.model('guest', guestSchema);
