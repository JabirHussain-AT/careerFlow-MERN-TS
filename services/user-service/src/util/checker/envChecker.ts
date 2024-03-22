export default async () => {

  try {

    if ( !process.env.PORT ) throw new Error("PORT number is missing !");
    if ( !process.env.FRONT_END_URL ) throw new Error("MONGO_DB_URL  is missing !");
    if (!process.env.JWT_SECRET ) throw new Error("Jwt secret  is missing ");
    if (!process.env.EMAIL) throw new Error("Nodemailer service Email is Missing ");
    if (!process.env.PASSWORD) throw new Error("Nodemailer service Email - password  is Missing ");

  } catch (err: unknown ) {

    throw err;
    
  }
};
