import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'
import {JWt_SECRET} from '../../../config/envChecker/config'


export const generateToken = (id: ObjectId): any => {
    return jwt.sign({ id },JWt_SECRET, { expiresIn: '20d' });
};