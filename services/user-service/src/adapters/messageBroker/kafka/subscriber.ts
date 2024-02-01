
import userExistConsumer from "./cosnumers/userExistConsumer";
export interface ISubscriber {
    userExist: (data: any) => Promise<void>;
    // Add other methods as needed
}

export interface IUserSubscriber extends Pick<ISubscriber, 'userExist'> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
            userExist : userExistConsumer
    };
};
