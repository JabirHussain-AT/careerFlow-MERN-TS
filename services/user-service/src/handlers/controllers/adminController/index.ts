import companyFetchController from "./companyFetch";

export = (dependencies : any ) =>{
    return {
        companyFetchController : companyFetchController(dependencies)
    }
}