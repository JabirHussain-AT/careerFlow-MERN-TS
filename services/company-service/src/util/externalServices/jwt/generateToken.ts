import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../config/envChecker/config";

export const generateToken = (payload: {
  _id: string;
  role: string;
  email: string;
}) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};
