import express, { Request, Response } from "express";
import { companyController } from "../../handlers/controllers";
import verifyToken from "../../util/middlewares/authChecker";

export default (dependencies: any): any => {
  const router = express.Router();

  const { 
    companySignupController, 
    formUpdateController  ,
    fetchCompaniesController ,
    updateCompanyApprovelController ,
    addJobController ,
    editJobController , 
    fetchComJobController ,
    changeStatusController ,
    fetchJobsController ,
    fetchJobController , 
    addCategoryController ,
    fetchCategoriesController

   } =
    companyController(dependencies);

    //company-signup
    router.post("/sign-up", companySignupController);


    
    // company updating-form data
    router.post("/updateForm", formUpdateController);



    router.post('/add-job' , addJobController )

    router.post('/updating-job',editJobController)

    router.get('/fetch-ComJobs/:id',fetchComJobController)

    router.get('/changestatus/job/:id/:value',changeStatusController)

    router.get('/fetchJobs',fetchJobsController)

    router.get('/fetchJob/:jobId',fetchJobController)

    router.post('/add-Category',addCategoryController)

    
    // middleware 
    router.use(verifyToken);
    router.get("/fetch-companies" , fetchCompaniesController)
    router.get("/fetchCategories" , fetchCategoriesController)
    router.post("/approve-companyStatus" , updateCompanyApprovelController)

  return router;
};
