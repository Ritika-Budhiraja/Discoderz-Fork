const NeederRegistrations = require('../models/neederRegistrations.model')
const Needer = require('../models/needer.model')

exports.registerNeederRegistrations = async (req, res, next) => {
    const {name, location, email, password, phno} = req.body;
    try{
        const needer = await NeederRegistrations.create(req.body);
         
        return res.status(429).json({
            message: "Wait for Admin Approval"
        });
    }
    catch(err) {
        res.status(500).json("Needer Registration failed")
    }
}

exports.approveNeeder = async (req, res, next) => {
    // console.log(req.body.needer.email)
    try{
        const neederRegistrations = await NeederRegistrations.findOne({email: req.body.needer.email})
        if(neederRegistrations) {
            const needer = await Needer.create(req.body.needer)
            await NeederRegistrations.deleteOne({ email: neederRegistrations.email})
        }
        return res.status(200).json("Needer Approved");
    }
    catch(err) {
        res.status(500).json({message: `Needer Approval failed, ${err}`})
    }
}