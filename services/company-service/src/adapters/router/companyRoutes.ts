import express, { Request, Response } from "express";
import { companyController } from "../../handlers/controllers";
import verifyUserAuth from "../../util/middlewares/authChecker";
import verifyuserAuth from "../../util/middlewares/authCheck";

export default (dependencies: any): any => {
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
    removeScheduleController
  } = companyController(dependencies);

  // company-signup
  router.post("/sign-up", companySignupController);

  // company updating-form data
  router.post("/updateForm", formUpdateController);

  router.post('/add-job', verifyUserAuth, addJobController);

  router.post('/updating-job', verifyUserAuth, editJobController);

  router.get('/fetch-ComJobs/:id', verifyUserAuth, fetchComJobController);

  router.get('/changestatus/job/:id/:value', verifyUserAuth, changeStatusController);

  router.get('/fetchJobs', verifyuserAuth,fetchJobsController);
  router.post('/add-Category',verifyuserAuth, addCategoryController);
  router.get('/fetchJob/:jobId',verifyuserAuth, fetchJobController);

  router.get('/removeSchedule/:jobId/:userId',verifyUserAuth, removeScheduleController)

  router.get('/getPrefferedJobs/:preferedJobs/:page',verifyuserAuth,preferedJobsController)
  router.post('/find-jobs-data', verifyuserAuth,findJobsController);
  router.get('/getUserApplications/:userId',verifyuserAuth, getMyJobApplicationController);
  router.get("/fetch-companies", verifyuserAuth, fetchCompaniesController);
  router.get("/fetchCategories",verifyuserAuth, fetchCategoriesController);
  router.post("/approve-companyStatus",verifyuserAuth, updateCompanyApprovelController);
  router.post("/applyjob",verifyuserAuth, jobApplyController);
  router.post("/change-status/job-application", verifyUserAuth, changeJobApplicationStatusController);
  router.get("/dashboard/get-jobs-applicants/:companyId",verifyUserAuth, getJobsAndApplicantsCount);
  router.post('/get-chatCompanyDetials',verifyuserAuth,getChatCompanydataController);
  router.get("/dashboard/get-jobs-applicants/:filter/:companyId",verifyUserAuth, getChartDataController);
  router.post("/job/sceduleInterview",verifyUserAuth,scheduleInterViewController);
  router.get("/job/get-interview-schedules/:jobId/:applicantId",verifyUserAuth,getScheduledInterviewController);

  return router;
};
