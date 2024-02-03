import express,{Request , Response} from 'express'
import { companyController } from '../../handlers/controllers'


export default (dependencies : any) : any => {
    const router = express.Router()

    const {
        companySignupController ,
        formUpdateController
    } = companyController(dependencies)

    console.log('companySignupController type:', typeof companySignupController);

    //company-signup
    console.log('I am here in croutes')


    router.post('/sign-up', companySignupController)

    // company updating-form data
    router.post('/updateForm',formUpdateController)

    return router
}
