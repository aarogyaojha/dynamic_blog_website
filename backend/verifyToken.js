const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.cookies.token
    // console.log(token)
    if(!token){
        return res.status(401).json("You are not authenticated!")
    }
    jwt.verify(token,'elorjhgorufhwoi[efhpoweihrw9hr3qowuerwoeufbwoeufbqopeufbqpowfubq',async (err,data)=>{
        if(err){
            return res.status(403).json("Token is not valid!")
        }
        
        req.userId=data._id
       
        // console.log("passed")
        
        next()
    })
}

module.exports=verifyToken