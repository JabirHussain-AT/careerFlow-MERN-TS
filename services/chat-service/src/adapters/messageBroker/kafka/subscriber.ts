
import  ChatCommon from "./consumers/common";
export interface ISubscriber {
    ChatCommon: (data: any) => Promise<void>;
    // Add other methods as needed
}

export interface IUserSubscriber extends Pick<ISubscriber, 'ChatCommon'> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        ChatCommon : ChatCommon
    };
};
