import { IDependencies } from "../../../entities/interfaces/IChatInterface";
import createNewRoomController from "./createNewRoom";
import fetchChatUsersController from './fetchChatUsers'


export default (dependencies: IDependencies ) => {
  return {
    createNewRoomController:createNewRoomController(dependencies),
    fetchChatUsersController : fetchChatUsersController(dependencies)
  };
};
