import jwt from 'jsonwebtoken'
// import {JWt_SECRET} from '../../../config/envConfig/config'


export const generateToken = ( payload : { _id : string , email : string , role : string  } )  => {

    return jwt.sign(payload,'careerflow', { expiresIn: '20d' });
    
};