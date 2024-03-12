import { MessageCollection, MessageDocument } from "../../schemas";

export const saveMessage = async (messageData: any) => {
  try {
    const data = await MessageCollection.create(messageData);

    if (data) {
      return data;
    }
    return false;
  } catch (error) {
    console.log(`An error occurred during the fetching chat users : ${error}`);
    return false;
  }
};
