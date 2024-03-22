import { chatUseCases , messageUseCases } from "../../useCases";
import { chatRepo ,messageRepo } from "../../adapters/database/mongoDB/repositories";
import { IRepositories, IUseCases } from "../../entities/interfaces/IChatInterface";


const repositories : IRepositories  = {
    chatRepo ,
    messageRepo
}

const usecases : IUseCases   = {
    messageUseCases, 
    chatUseCases 
}

export = {
    repositories ,
    usecases
}