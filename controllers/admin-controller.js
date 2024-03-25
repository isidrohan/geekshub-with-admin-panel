const User = require("../models/user-model")
const Service = require("../models/services-model")
const Contact = require("../models/contact-model")


// ----------------------
// -  get all users     -
// ----------------------
const getAllUsers = async(req,res) => {
    try {
        const response = await User.find({},{password: 0});
        if(!response || response.length === 0){
            return res.status(404).json({message: 'No users found'})
        }
        return res.status(200).json(response);
    } catch (error) {
        console.log("admin error",error);
        return res.status(500).json({message:'Server Error!'});
    }
}

// ------------------------------
// -  get single user by id     -
// ------------------------------
const getUserById = async (req, res) =>{
  try {
    const id =  req.params.id;
    const data = await User.findOne({_id : id},{password:0});
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    // next(error);
  }
}

// ------------------------------
// -  update single user by id  -
// ------------------------------
const updateUserById = async(req,res)=>{
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne({_id:id},{$set:updatedUserData});
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
}


// ----------------------
// -  delete a user     -
// ----------------------

const deleteUserById = async(req,res)=>{
  try {
    const id =  req.params.id;
    await  User.deleteOne({_id : id});
    return res.status(200).json({message:"The user has been deleted"});
  } catch (error) {
    console.log(error)
    // next(error);
  }
}

// ----------------------
// -  get all services  -
// ----------------------
const allServices = async (req, res) => {
    try {
      const service = await Service.find();
      if (!service || service.length === 0) {
        return res.status(404).json({ message: "No services found" });
      } else {
        return res.status(200).json(service);
      }
    } catch (error) {
      console.log("admin service", error);
      return res.status(500).json({ error: "error occur in admin service" });
    }
  };


// -----------------------------
// -  get all contacts detail  -
// -----------------------------
  const allContacts = async(req,res) => {
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: 'No users found'})
        }
        return res.status(200).json(contacts);
    } catch (error) {
        console.log("admin contacts",error);
        return res.status(500).json({error :"error from admin contact"})
    }
}

// -----------------------------
// -   Delete Contact by id    -
// -----------------------------
const deleteContactById = async(req,res)=>{
    try {
      const id = req.params.id;
      await Contact.deleteOne({_id : id})
      return res.status(200).json({message: "Contact deleted successfully"});
    } catch (error) {
      return  res.status(500).json({error:"Error deleting the contact"});
    }
}



module.exports = {getAllUsers,allServices,allContacts,deleteUserById,getUserById ,updateUserById,deleteContactById};