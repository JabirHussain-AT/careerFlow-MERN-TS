import express, { Request, Response } from "express";
import { companyController } from "../../handlers/controllers";
import verifyUserAuth from "../../util/middlewares/authChecker";
import verifyuserAuth from "../../util/middlewares/authCheck";
import { IDependencies } from "../../entities/Interfaces/ICompanyInterface";

export default (dependencies: IDependencies )  => {
  const router = express.Router();

  const {
    companySignupController,
    formUpdateController,
    fetchCompaniesController,
    updateCompanyApprovelController,
    addJobController,
    editJobController,
    fetchComJobController,
    changeStatusController,
    fetchJobsController,
    fetchJobController,
    addCategoryController,
    fetchCategoriesController,
    findJobsController, 
    getJobsAndApplicantsCount ,
    jobApplyController,
    getMyJobApplicationController,
    preferedJobsController ,
    getChartDataController ,
    getChatCompanydataController ,
    changeJobApplicationStatusController,
    scheduleInterViewController ,
    getScheduledInterviewController ,
    removeScheduleController ,
    removeCategoryController
  } = companyController(dependencies);



  router.get('/fetch-ComJobs/:id', verifyUserAuth, fetchComJobController);
  router.get('/changestatus/job/:id/:value', verifyUserAuth, changeStatusController);
  router.get('/fetchJobs', verifyuserAuth,fetchJobsController);
  router.get('/fetchJob/:jobId',verifyuserAuth, fetchJobController);
  router.get('/removeSchedule/:jobId/:userId',verifyUserAuth, removeScheduleController);
  router.get('/delete-Category/:CategoryId',verifyuserAuth,removeCategoryController )
  router.get('/getPrefferedJobs/:preferedJobs/:page',verifyuserAuth,preferedJobsController)
  router.get('/getUserApplications/:userId',verifyuserAuth, getMyJobApplicationController);
  router.get("/fetch-companies", verifyuserAuth, fetchCompaniesController);
  router.get("/fetchCategories",verifyuserAuth, fetchCategoriesController);
  router.get("/dashboard/get-jobs-applicants/:companyId",verifyUserAuth, getJobsAndApplicantsCount);
  router.get("/dashboard/get-jobs-applicants/:filter/:companyId",verifyUserAuth, getChartDataController);
  router.get("/job/get-interview-schedules/:jobId/:applicantId",verifyUserAuth,getScheduledInterviewController);

  router.post("/sign-up", companySignupController);
  router.post("/updateForm", formUpdateController);
  router.post('/add-job', verifyUserAuth, addJobController);
  router.post('/add-Category',verifyuserAuth, addCategoryController);
  router.post('/find-jobs-data', verifyuserAuth,findJobsController);
  router.post("/applyjob",verifyuserAuth, jobApplyController);
  router.post('/get-chatCompanyDetials',verifyuserAuth,getChatCompanydataController);
  router.post("/job/sceduleInterview",verifyUserAuth,scheduleInterViewController);
  
  // 1
  router.put('/updating-job', verifyUserAuth, editJobController); 
  // 2
  router.put("/change-status/job-application", verifyUserAuth, changeJobApplicationStatusController);
  router.put("/approve-companyStatus",verifyuserAuth, updateCompanyApprovelController);

  return router;
};
