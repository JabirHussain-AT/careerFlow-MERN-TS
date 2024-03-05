import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'
import {JWt_SECRET} from '../../../config/envConfig/config'


export const generateToken = (payload): any => {
    return jwt.sign(payload,JWt_SECRET, { expiresIn: '20d' });
};