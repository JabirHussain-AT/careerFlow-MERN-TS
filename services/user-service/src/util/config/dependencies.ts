import { usecases } from "../../usecases";
import { userRepo } from "../../adapters/database/mongoDB/repositories";
import { IRepositories } from "../../entities/intrefaces/IUserInterfaces";

const repositories : IRepositories  = {
    
    userRepo
}

export = {
    usecases ,
    repositories
}