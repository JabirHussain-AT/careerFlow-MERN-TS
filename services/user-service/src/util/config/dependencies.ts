import { usecases,adminUseCases } from "../../usecases";
import { userRepo } from "../../adapters/database/mongoDB/repositories";

const repositories : any  = {
    userRepo
}

export = {
    usecases ,
    adminUseCases,
    repositories
}