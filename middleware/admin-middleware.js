

const adminMiddleware = (req,res,next)=>{
    try {
        const adminYes = req.user.isAdmin;
        console.log(adminYes);
        if(!adminYes){
            res.status(403).json({message:"access denied ! user are not an admin"})
        }
        next();

    } catch (error) {
        res.status(500).json({error})
        // next(error)
    }
}
module.exports=adminMiddleware;
