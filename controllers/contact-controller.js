const Contact = require("../models/contact-model");

const contactform = async(req,res)=>{
    try {
        const response = req.body;
        const data = await Contact.create(response);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message: "message not delivered"});
    }
}

module.exports = contactform;