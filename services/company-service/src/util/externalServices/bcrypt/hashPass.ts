import bcrypt from "bcrypt";
import { HASH_SALT } from '../../../config/envChecker/config';

export const hashPassword = async (password: string) => {
    let SALT: string = await bcrypt.genSalt(Number(HASH_SALT));
    console.log(SALT ,'<<<<<<<<>>>>>>>>>>>       ')
    let hashedPassword = await bcrypt.hash(password, SALT);
    return hashedPassword;
};
