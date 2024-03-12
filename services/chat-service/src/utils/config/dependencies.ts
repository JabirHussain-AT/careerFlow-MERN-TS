import { chatUseCases , messageUseCases } from "../../useCases";
import { chatRepo ,messageRepo } from "../../adapters/database/mongoDB/repositories";


const repositories : any  = {
    chatRepo ,
    messageRepo
}

const usecases   = {
    chatUseCases ,
    messageUseCases
}

export = {
    repositories ,
    usecases
}