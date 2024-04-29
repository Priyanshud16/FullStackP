const jwt=require("jsonwebtoken")

const auth=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    console.log(token)
    

    if(token){
        jwt.verify(token, 'masai', function(err, decoded) {
            req.body.userID=decoded.userID
            req.body.username=decoded.user
            console.log(decoded) // bar
            next()
          });
    }else{
        res.status(500).json({message:"Token not found please login first"})
    }
}

module.exports=auth