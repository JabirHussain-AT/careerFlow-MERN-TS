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

export const fetchChatUserChat = async (senderId : string , recieverId : string) => {
  console.log("🚀 ~ file: messageRepo.ts:18 ~ fetchChatUserChat ~ recieverId:", recieverId)
  console.log("🚀 ~ file: messageRepo.ts:18 ~ fetchChatUserChat ~ senderId:", senderId)
  try {
  const data = await MessageCollection.find({
  $or: [
    { senderId: senderId, reciverId: recieverId },
    { senderId: recieverId, reciverId: senderId }
  ]
}).sort({ createdAt: 1 });



    

    if (data) {
      return data;
    }
    return false;
  } catch (error) {
    console.log(`An error occurred during the fetching chat users : ${error}`);
    return false;
  }
};

