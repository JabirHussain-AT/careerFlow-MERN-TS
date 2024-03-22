
export interface ICustomError extends Error {
    code: number;
    message :string
  }

export interface IDependencies {
  usecases : IUseCasesData
  repositories : IRepositories 
}  

export interface IRepositoriesData {

    createNewUser : Function ,
    saveOtp : Function ,
    verifyOtp  : Function ,
    updateFormData  : Function ,
    fetchCompanies  : Function ,
    updateApprovel  : Function ,
    addJobInCompany  : Function ,
    fetchComJobInCompany  : Function ,
    editJobInCompany  : Function ,
    changeJobStatus  : Function ,
    fetchJobs  : Function ,
    fetchJob  : Function ,
    getChartData  : Function ,
    addCategory  : Function ,
    getPreferedJobs  : Function ,
    fetchCategories  : Function ,
    getJobsAndApplicantsCount  : Function ,
    findJobs : Function ,
    jobApply  : Function ,
    getMyJobApplications  : Function ,
    changeJobApplicationStatus  : Function ,
    getChatCompanyData  : Function ,
    scheduleInterview  : Function ,
    getInterViewSchedule  : Function ,
    removeScheduledInterview  : Function ,
    removeCategory : Function 

}

export interface IUseCasesData {
   signUp_useCase : Function ,
  saveAndSendOtp_useCase : Function ,
  sendPass_useCase  : Function ,
  verifyOtp_useCase  : Function ,
  updateFormData_useCase  : Function ,
  fetchCompanies_useCase  : Function ,
  updateCompanyApprovel_useCase : Function ,
  sendStatus_useCase : Function ,
  addJob_useCase  : Function ,
  editJob_useCase  : Function ,
  fetchComJobs_useCase  : Function ,
  changeStatus_useCase  : Function ,
  fetchJobs_useCase  : Function ,
  fetchJob_useCase  : Function ,
  preferedJobs_useCase : Function ,
  addCategory_useCase  : Function ,
  fetchCategories_useCase  : Function ,
  findJobs_useCase  : Function ,
  scheduleInterView_useCase : Function ,
  jobApply_useCase  : Function ,
  getChartData_useCase  : Function ,
  getMyJobApplications_useCase  : Function ,
  getJobAndApplicantsCount_useCase  : Function ,
  getChatCompanyData_useCase  : Function ,
  changeJobApplicationStatus_useCase : Function ,
  getInterViewSchedule_useCase  : Function ,
  removeScheduledInterview_useCase  : Function ,
  removeCategory_useCase  : Function 
}

export interface IRepositories { 
    companyRepo : IRepositoriesData
}

export interface IUseCases {
  usecases : IUseCasesData
}