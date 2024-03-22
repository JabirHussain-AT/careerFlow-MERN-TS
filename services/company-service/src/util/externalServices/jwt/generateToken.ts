import jwt from "jsonwebtoken";
import { JWt_SECRET } from "../../../config/envChecker/config";

export const generateToken = (payload: {
  _id: string;
  role: string;
  email: string;
}) => {
  return jwt.sign(payload, JWt_SECRET, { expiresIn: "1h" });
};
