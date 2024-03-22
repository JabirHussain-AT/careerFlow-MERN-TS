
import  ChatCommon from "./consumers/common";
export interface ISubscriber {

    ChatCommon: (data : {}) => Promise<void>;

}

export interface IUserSubscriber extends Pick<ISubscriber, 'ChatCommon'> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        ChatCommon : ChatCommon
    };
};
