import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const verifyUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.cookies.user_jwt;
  const secret: string = process.env.JWt_SECRET;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Current user is not authenticated!' });
  }

  jwt.verify(token, secret, (err: any, decodedUser: any) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Invalid token!' });
    } else {
      (req as any).decodedUser = decodedUser;

      if (decodedUser.role !== 'admin') {
        return res.status(403).json({ success: false, message: 'Insufficient privileges!' });
      }
      next();
    }
  });
};

export default verifyUserAuth;
