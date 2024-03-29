import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../../config/envConfig/config'


export const generateToken = ( payload : { _id : string , email : string , role : string  } )  => {

    return jwt.sign(payload,JWT_SECRET, { expiresIn: '20d' });
    
};