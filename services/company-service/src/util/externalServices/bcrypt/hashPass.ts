import bcrypt from "bcrypt";
import { HASH_SALT } from '../../../config/envChecker/config';

export const hashPassword = async (password: string) => {
    let SALT =  HASH_SALT     
    let hashedPassword = await bcrypt.hash(password, SALT);
    return hashedPassword;
};
