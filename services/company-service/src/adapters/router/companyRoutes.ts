import express,{Request , Response} from 'express'
import { companyController } from '../../handlers/controllers'


export default (dependencies : any) : any =>{
    const router = express.Router()

    const {
    comapanySignupController
    } = companyController(dependencies)

//company-signup
console.log('iam here in croutes')
    router.post('/sign-up',comapanySignupController)

    return router
}