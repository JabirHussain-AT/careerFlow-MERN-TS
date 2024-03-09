import { ChatRoomCollection, ChatRoomDocument } from "../../schemas";


export const findIsChatRoomExistingWithTwoSpecificUsers =
    async (currentUserId: string, sellerId: string): Promise<boolean | ChatRoomDocument> => {
        try {
                console.log('hey its repo')
        } catch (error) {
            console.log(`an error happened during checking a room is existing with given two userId or not ${error}`);
            return false;
        }
    }
