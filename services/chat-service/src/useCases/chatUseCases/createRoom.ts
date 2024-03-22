import { IDependencies } from "../../entities/interfaces/IChatInterface";

export const creatNewRoom_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      chatRepo: { createNewChatroom },
    },
  } = dependencies;

  const interactor = async (roomDetials: {
    roomCreater: string;
    roomJoiner: string;
  }) => {
    return await createNewChatroom(roomDetials);
  };

  return { interactor };
};
