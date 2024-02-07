
import companyDetailSave from "./consumers/companyDetailSave";
import updateStage from "./consumers/updateStages";
export interface ISubscriber {
    companyDetailSave: (data: any) => Promise<void>;
    updateStage : (data : any) => Promise<void>
    // Add other methods as needed
}


export interface IUserSubscriber extends ISubscriber { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        companyDetailSave: companyDetailSave,
        updateStage : updateStage
    };
};
