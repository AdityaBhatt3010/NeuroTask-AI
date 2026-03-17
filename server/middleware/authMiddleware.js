import jwt from "jsonwebtoken"

const protect = (req,res,next)=>{

    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({message:"Not authorized"})
    }

    try{

        const decoded = jwt.verify(
            token.split(" ")[1],
            process.env.JWT_SECRET
        )

        req.user = decoded.id

        next()

    }catch(err){
        res.status(401).json({message:"Token invalid"})
    }

}

export default protect