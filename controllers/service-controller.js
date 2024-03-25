const Service = require("../models/services-model")

const service = async(req,res)=>{
    try {
        const response = await Service.find();
        if(!response){
            return res.status(404).json("can't fetch service data");
        }
        return res.status(200).json(response)
    } catch (error) {
        console.log("service",error);
    }
}

module.exports = service;