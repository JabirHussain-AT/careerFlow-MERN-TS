import saveMessageController from "./saveMessage";


export default (dependencies: any) => {
  return {
    saveMessageController:saveMessageController(dependencies)
  };
};
