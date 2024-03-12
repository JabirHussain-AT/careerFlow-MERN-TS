import createNewRoomController from "./createNewRoom";
import fetchChatUsersController from './fetchChatUsers'


export default (dependencies: any) => {
  return {
    createNewRoomController:createNewRoomController(dependencies),
    fetchChatUsersController : fetchChatUsersController(dependencies)
  };
};
