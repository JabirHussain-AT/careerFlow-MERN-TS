import { usecases } from "../../usecases";
import { companyRepo } from "../../adapters/database/repositories";
import { IRepositories } from "../../entities/Interfaces/ICompanyInterface";

const repositories : IRepositories  = {
    companyRepo
}

export default {
    usecases ,
    repositories
}