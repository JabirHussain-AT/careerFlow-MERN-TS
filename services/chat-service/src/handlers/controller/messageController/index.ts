import saveMessageController from "./saveMessage";
import fetchUserChatController from "./fetchUserChat"


export default (dependencies: any) => {
  return {
    fetchUserChatController:fetchUserChatController(dependencies),
    saveMessageController:saveMessageController(dependencies),
  };
};
