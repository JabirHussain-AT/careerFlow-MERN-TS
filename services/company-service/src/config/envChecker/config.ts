let EMAIL : string = process.env.EMAIL
let PASSWORD : string = process.env.PASSWORD
let HASH_SALT : number = 10
let JWt_SECRET : string = process.env.JWT_SECRET
let NODE_ENV : string = process.env.NODE_ENV

export {
    EMAIL,
    PASSWORD,
    HASH_SALT,
    JWt_SECRET,
    NODE_ENV
}
