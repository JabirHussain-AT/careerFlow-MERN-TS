let EMAIL : string = process.env.EMAIL
let PASSWORD : string = process.env.PASSWORD
let HASH_SALT : number = 10
let JWT_SECRET : string = process.env.JWT_SECRET
let NODE_ENV : string = process.env.NODE_ENV

export {
    EMAIL,
    PASSWORD,
    HASH_SALT,
    JWT_SECRET,
    NODE_ENV
}
