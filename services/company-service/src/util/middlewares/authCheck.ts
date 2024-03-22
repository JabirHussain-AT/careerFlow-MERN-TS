import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const verifyUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.cookies.user_jwt;
  const secret: string = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Current user is not authenticated!' });
  }

  jwt.verify(token, secret, (err , decodedUser:  { }) => {

    if (err) {
      return res.status(401).json({ success: false, message: 'Invalid token!' });
    } else {
      (req as any).decodedUser = decodedUser;
      next();
    }
  });
};

export default verifyUserAuth;
