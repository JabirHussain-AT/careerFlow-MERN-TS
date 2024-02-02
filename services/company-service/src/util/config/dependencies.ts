import { usecases } from "../../usecases";
import { companyRepo } from "../../adapters/database/repositories";

const repositories : any  = {
    companyRepo
}

export default {
    usecases ,
    repositories
}