import saveMessageController from "./saveMessage";
import fetchUserChatController from "./fetchUserChat"
import unreadMessageCountController from './unreadMessageCount'
import changeUnreadStatusController from './changeUnreadStatus'
import { IDependencies } from "../../../entities/interfaces/IChatInterface";


export default (dependencies: IDependencies ) => {
  return {
    fetchUserChatController:fetchUserChatController(dependencies),
    saveMessageController:saveMessageController(dependencies),
    changeUnreadStatusController:changeUnreadStatusController(dependencies),
    unreadMessageCountController:unreadMessageCountController(dependencies)
  };
};
