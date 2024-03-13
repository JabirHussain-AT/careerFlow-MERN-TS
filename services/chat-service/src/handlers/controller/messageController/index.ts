import saveMessageController from "./saveMessage";
import fetchUserChatController from "./fetchUserChat"
import unreadMessageCountController from './unreadMessageCount'
import changeUnreadStatusController from './changeUnreadStatus'


export default (dependencies: any) => {
  return {
    fetchUserChatController:fetchUserChatController(dependencies),
    saveMessageController:saveMessageController(dependencies),
    changeUnreadStatusController:changeUnreadStatusController(dependencies),
    unreadMessageCountController:unreadMessageCountController(dependencies)
  };
};
