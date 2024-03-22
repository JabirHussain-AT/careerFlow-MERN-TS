import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../..//adapters/database/mongoDB/schemas/userSchema";

const verifyUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.cookies.user_jwt;
  const secret: string = process.env.JWT_SECRET;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Current user is not authenticated!" });
  }

  jwt.verify(token, secret, async (err: any, decodedUser: { _id: string }) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token!" });
    } else {
      // ==============================================================================================================

      const user = await User.findById(decodedUser._id);
      if (user && user.isBlocked === true) {
        return res
          .status(403)
          .json({ success: false, message: "User is blocked!" });
      }

      // ===============================================================================================================
      (req as any).decodedUser = decodedUser;
      next();
    }
  });
};

export default verifyUserAuth;
