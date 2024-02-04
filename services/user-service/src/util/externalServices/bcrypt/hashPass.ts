import bcrypt from "bcrypt";
import { HASH_SALT } from "../../../config/envConfig/config";

export const hashPassword = async (password: string) => {
    let SALT: number  =  HASH_SALT ;
    console.log(SALT ,'<<<<<<<<>>>>>>>>>>>       ')
    let hashedPassword = await bcrypt.hash(password, SALT);
    return hashedPassword;
};
