import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'
import {JWt_SECRET} from '../../../config/envChecker/config'


export const generateToken = (payload: any): any => {
    console.log(JWt_SECRET,'----------------------------------')
    return jwt.sign( payload ,JWt_SECRET, { expiresIn: '1h' });
};