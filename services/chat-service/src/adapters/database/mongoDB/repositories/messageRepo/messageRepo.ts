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


export const getUnreadMessagesCount = async (applicantIds) => {
  try {
    const unreadMessagesCounts = {};

    const data = await MessageCollection.find({ 
      unread: true, 
      senderId: { $in: applicantIds } 
    });

    data.forEach(message => {
      const applicantId = message.senderId.toString(); // Convert ObjectId to string
      unreadMessagesCounts[applicantId] = (unreadMessagesCounts[applicantId] || 0) + 1;
    });

    // Create an object with keys of applicantId
    const unreadMessagesObject = {};
    applicantIds.forEach(id => {
      unreadMessagesObject[id] = unreadMessagesCounts[id] || 0;
    });

    return unreadMessagesObject;
  } catch (error) {
    console.log(`An error occurred during the fetching chat users : ${error}`);
    return false;
  }
};



export const changeUnreadStatus = async (userId) => {
  try {
    const data = await MessageCollection.updateMany(
      { senderId: userId },
      { $set: { unread: false } }
    );
    if(data){
      return data
    }else{
      return false
    }
    
     
  } catch (error) {
    console.log(`An error occurred during the fetching chat users : ${error}`);
    return false;
  }
};





