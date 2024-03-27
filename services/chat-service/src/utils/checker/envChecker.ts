export default async () => {
  try {
    if (!process.env.PORT) throw new Error("PORT number is missing !");
    if (!process.env.MONGODB_URL) throw new Error("MONGO_DB_URL  is missing !");
    if (!process.env.JWT_SECRET) throw new Error("Jwt token is missing ");
    if (!process.env.FRONT_END_URL) throw new Error("Front end url  is missing ");
    if (!process.env.EMAIL) throw new Error(" Nodemailer Email  is missing ");
    if (!process.env.PASSWORD) throw new Error(" Nodemailer Email - password is missing ");
  } catch (err) {
    throw err;
  }
};
