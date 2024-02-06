import express , {Request , Response , NextFunction} from 'express'
import jwt from 'jsonwebtoken'

const verifyUserAuth = (req : Request , res : Response , next : NextFunction ) =>{
    const token : string = req.cookies.userJwt; 
    const secret  : string = process.env.JWT_TOKEN_SECRET
    if(!token){
        return res.status(401).json({success : false , message : 'current user is not authenticated !'})
    }
    jwt.verify(token,secret,(err : any , user : any )=>{
        if(err)return res.status(401).json({success : false , message : 'Invalied token !'})
        else  next()
    })
}

export default verifyUserAuth