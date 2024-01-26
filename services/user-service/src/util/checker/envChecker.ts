export default async () => {
  try {
    if (process.env.PORT) throw new Error("PORT number is missing !");
    if (process.env.MONGO_DB_URL) throw new Error("MONGO_DB_URL  is missing !");
    if (!process.env.JWT_TOKEN_SECRET) throw new Error("Jwt token is missing ");
  } catch (err: any) {
    throw err;
  }
};
