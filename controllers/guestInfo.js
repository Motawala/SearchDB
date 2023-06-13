const guest = require('../models/guest')


const lookup = async(req, res) =>{
    try{
        var {firstname, lastname} = req.body;
       

        const exist = await guest.findOne({firstname});
        const existLastname = await guest.findOne({lastname});

        if(exist){
            return res.status(200).json(exist)
        }else if(existLastname){
            return res.status(200).json(existLastname)
        }else{
            return res.status(400).json({
                success:false,
                message: "Guest not found"
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error Finding the user"
        })
    }
}


const addGuest = async(req,res) =>{
    try{
        const {firstname, lastname} = req.body;

        const newGuest = await guest.create({
            firstname,lastname
        })

        if(newGuest){
            return res.status(200).json({
                success:true,
                message:"Guest Added to the DNR Check list"
            })
        }else{
            return res.status(500).json({
                success:false,
                message:"Error Adding the guest to the check list"
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error adding the user",error
        })
    }
}



module.exports = {lookup, addGuest};