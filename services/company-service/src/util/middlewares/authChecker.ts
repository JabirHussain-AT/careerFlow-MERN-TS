import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.cookies.user_jwt;
  const secret: string = process.env.JWt_SECRET;


  if (token !== undefined ) {
    jwt.verify(token, secret, (err : unknown , decodedUser: { role: string}) => {
        if (err) {
          return res
            .status(401)
            .json({ success: false, message: "Invalid token!" });
        } else {
            (req as any).decodedUser = decodedUser;
  
    
          if (decodedUser.role !== "company") {
            return res
              .status(403)
              .json({ success: false, message: "Insufficient privileges!" });
          }
          next();
        }
      });
}else{
    return res
  .status(401)
  .json({ success: false, message: "Current user is not authenticated!" });

 
}

};

export default verifyUserAuth;
