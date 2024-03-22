import { otpCollection, userCollection } from "../..";
import { IUserData, IUserDoc } from "../../schemas/userSchema";




export const createNewUser = async (
  userCredentials: IUserData
): Promise<IUserData | boolean> => {

  try {
    const newUser = await userCollection.create(userCredentials);
    return newUser as IUserData; // Assuming userCollection.create returns a single document
  } catch (err) {
    if (err.code && (err.code === 11000 || err.code === 11001)) {
      console.error("Duplicate key violation:", err);
      return false;
    } else {
      console.error("Error creating user:", err);
      return false;
    }
  }
};



export const userExistCheck = async (
  userCredentials: IUserData
): Promise<IUserData | boolean | IUserDoc> => {

  try {
    const userEmail = userCredentials?.email;
    let userExistOrNot = await userCollection.findOne({ email: userEmail });
    if (!userExistOrNot) {
      return false;
    } else {
      return userExistOrNot ? true : false;
    }
  } catch (err: unknown) {
    console.log(err, "======  err happened in userRepo userExistCheck");
  }
};

export const changeBlockStatus = async (userId: string) => {

  try {
    const user = await userCollection.findOne({ _id: userId });
    if (!user) {
      throw new Error();
    }
    const updatedStatus = !user.isBlocked;

    const data = await userCollection.findOneAndUpdate(
      { _id: userId },
      { $set: { isBlocked: updatedStatus } }
    );

    if (data) {
      return data;
    }
    return false;
  } catch (err: unknown) {
    console.log(err, "=> err happened in userRepo changing block status");
    throw err;
  }
};




export const saveOtp = async (otp: number, email: string) => {

  try {

    setTimeout(() => {
      otpCollection.findOneAndDelete({ email: email });
    }, 120 * 1000);

    await otpCollection
      .findOneAndUpdate(
        { email: email },
        { otp: otp },
        { upsert: true, new: true }
      )
      .then((doc) => {
        return doc;
      })
      .catch((err: unknown) => {
        console.log(err, "err in the saveOtp");
      });
  } catch (err: unknown) {
    console.log(err, "======  err happened in userRepo saveOtp repo");
  }
};




export const verifyOtp = async (otp: number, email: string) => {
  try {
   
    let otpDoc = await otpCollection.findOne({ email: email });

    if (otp === otpDoc?.otp) {
      return true;
    } else return false;
  } catch (err: unknown) {
    console.log(err, "====== err occured in the verify otp repo");
    return false;
  }
};





export const loginVerify = async (email: string, password: string) => {
  try {
    let isUserExist = await userCollection.findOne({ email: email });

    if (isUserExist == null) {
      return false;
    } else {
      return isUserExist;
    }
  } catch (err: unknown) {
    console.log(err, "====== err occured in the verify otp repo");
  }
};





export const userExistorNot = async (email: string) => {
  try {
    let isUserExist = await userCollection.findOne({ email: email });

    if (isUserExist == null) {
      return false;
    } else if (isUserExist) {
      return true;
    }
  } catch (err: unknown) {
    console.log(err, "====== err occured in the userExistorNot");
  }
};






export const fetchUsers = async (email: string) => {
  try {
    let users = await userCollection.find();

    if (users == null) {
      return false;
    } else if (users) {
      return users;
    }
  } catch (err: unknown) {
    console.log(err, "====== err occured in the userExistorNot");
  }
};





export const userProfileUpdate = async (
  userId: string,
  updateField: string,
  updateValue: string
) => {
  try {
    let data = await userCollection.findOneAndUpdate(
      { _id: userId },
      { [updateField]: updateValue },
      { new: true }
    );
    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err: unknown) {
    console.log(err, "====== err occured in the userExistorNot");
  }
};





export const userBasicDetialsUpdate = async (
  userId: string,
  dataToUpload: {
    _id: string;
  }
) => {
  delete dataToUpload._id;
  try {
    let data = await userCollection.findOneAndUpdate(
      { _id: userId },
      { $set: dataToUpload },
      {
        projection: { password: 0 },
        returnDocument: "after",
      }
    );

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err: unknown) {
    console.log(err, "====== err occured in the updating user basic info ");
  }
};





export const fetchUser = async (userId: string) => {
  try {
    let data = await userCollection.findOne(
      { _id: userId },
      { projection: { password: 0 } }
    );

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (err: unknown) {
    console.log(err, "====== err occured in the fetching user repo");
  }
};





export const getChatUserData = async (userDataContainer ) => {
  try {
    const result = [];
    let eachData = [];

    for (let i = 0; i < userDataContainer[0].length; i++) {
      if (userDataContainer[1] === "company") {
        eachData = await userCollection.findOne({
          _id: userDataContainer[0][i]?.roomJoiner,
        });
      } else {
        eachData = await userCollection.findOne({
          _id: userDataContainer[0][i]?.roomCreater,
        });
      }
      result.push(eachData);
    }
    if (result) {
      return result;
    } else {
      return false;
    }
  } catch (err: unknown) {
    console.log(
      err,
      "====== err occured in the fetching caht users  in user repo"
    );
  }
};





export const saveTheJob = async (userId: string, jobId: string) => {
  try {
    const user = await userCollection.findOne({ _id: userId });
    if (!user) {
      return false;
    }
    const jobIndex = user.savedJobs.indexOf(jobId);

    if (jobIndex !== -1) {
      const updatedUser = await userCollection.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedJobs: jobId } },
        { returnDocument: "after" }
      );
      return updatedUser;
    } else {
      const updatedUser = await userCollection.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { savedJobs: jobId } },
        { returnDocument: "after" }
      );
      return updatedUser;
    }
  } catch (err: unknown) {
    console.error(err, "Error in the user repo - save the job");
    return false;
  }
};
