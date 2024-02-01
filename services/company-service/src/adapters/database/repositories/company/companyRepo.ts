import { companyCollection } from "../..";
import { ICompanyData } from "../../schemas/companySchema";

export const createNewUser = async (
  userCredentials: ICompanyData
): Promise<ICompanyData | boolean> => {
  try {
    const newUser = await companyCollection.create(userCredentials);
    return newUser as ICompanyData; // Assuming userCollection.create returns a single document
  } catch (err: any) {
    if (err.code && (err.code === 11000 || err.code === 11001)) {
      // Duplicate key error (unique constraint violation)
      console.error('Duplicate key violation:', err);
      return false;
    } else {
      // Other errors
      console.error('Error creating user:', err);
      return false;
    }
  }
};
