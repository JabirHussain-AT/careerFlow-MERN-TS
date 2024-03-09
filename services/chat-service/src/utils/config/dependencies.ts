import { chatUseCases } from "../../useCases";
import { chatRepo } from "../../adapters/database/mongoDB/repositories";

const repositories : any  = {
    chatRepo
}

const usecases   = {
    chatUseCases
}

export = {
    repositories ,
    usecases
}