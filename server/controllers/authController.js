const Giver = require('../models/giver.model')
const Needer = require('../models/needer.model')
const Admin = require('../models/admin.model')
const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
    try {
        const giver = await Giver.findOne({ email: req.body.email });
        if (giver) {
            const result = req.body.password === giver.password;
            if (result) {
                const token = jwt.sign({user: giver, role: "giver"}, "Sumanth", {
                    expiresIn: "6h",
                  });
                  const data = {JToken: token, role: "giver"}
                   res.status(200).json(data);
                  
                } else {
                     res.status(400).json({ error: "password doesn't match" });
                    
                }
            } 
    } catch (error) {
         res.status(400).json(error);
        
    }
    try {
        const needer = await Needer.findOne({ email: req.body.email });
        if (needer) {
            const result = req.body.password === needer.password;
            if (result) {
                const token = jwt.sign({user: needer, role: "needer"}, "Sumanth", {
                    expiresIn: "6h",
                });
                const data = {JToken: token, role: "needer"}
                 res.status(200).json(data);
                
            } else {
                 res.status(400).json({ error: "password doesn't match" });
                
            }
        } 
    } catch (error) {
         res.status(400).json({ error });
        
    }
    try {
        const admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            const result = req.body.password === admin.password;
            if (result) {
                const token = jwt.sign({user: admin, role: "admin"}, "Sumanth", {
                    expiresIn: "6h",
                });
                const data = {JToken: token, role: "admin"}
                 res.status(200).json(data);
                
            } else {
                 res.status(400).json({ error: "password doesn't match" });
                
            }
        } else {
             res.status(400).json({ error: "User doesn't exist" });
            
        }
    } catch (error) {
         res.status(400).json({ error });
        
    }
}