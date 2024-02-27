const Giver = require('../models/giver.model')
// const Admin = require('../models/admin.model')

exports.registerGiver = async (req, res, next) => {
    const {name, location, email, password} = req.body;
    try{
        const giver = await Giver.create(req.body);
         
        return res.status(200).json(giver);
    }
    catch(err) {
        res.status(500).json("Giver Registration failed")
    }
}