import { ChatRoomCollection, ChatRoomDocument } from "../../schemas";

export const createNewChatroom = async (roomDetails: {
  roomCreater: string;
  roomJoiner: string;
}): Promise<boolean | ChatRoomDocument> => {
  try {
    const existingChatRoom = await ChatRoomCollection.findOne({
      $or: [
        {
          roomCreater: roomDetails.roomCreater,
          roomJoiner: roomDetails.roomJoiner,
        },
        {
          roomCreater: roomDetails.roomJoiner,
          roomJoiner: roomDetails.roomCreater,
        },
      ],
    });

    if (existingChatRoom) {
      console.log(`Chat room already exists with ID: ${existingChatRoom._id}`);
      return existingChatRoom;
    } else {
      // Create a new chat room
      const newChatRoom = new ChatRoomCollection({
        roomCreater: roomDetails.roomCreater,
        roomJoiner: roomDetails.roomJoiner,
        lastMessage: "", // Optional, depending on your requirements
      });

      const savedChatRoom = await newChatRoom.save();
      console.log(`New chat room created with ID: ${savedChatRoom._id}`);
      return savedChatRoom;
    }
  } catch (error) {
    console.log(
      `An error occurred during checking/creating a chat room: ${error}`
    );
    return false;
  }
};



export const fetchChatUsers = async (companyId: string , limit : number ) => {
  try {
    const data = await ChatRoomCollection.find({
      $or: [{ roomCreater: companyId }, { roomJoiner: companyId }],
    }).limit(limit);

    if (data) {
      return data;
    }
    return false;
  } catch (error) {
    console.log(`An error occurred during the fetching chat users : ${error}`);
    return false;
  }
};
