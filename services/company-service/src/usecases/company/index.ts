import { signUp_useCase  }  from "./companySignup";
import { saveAndSendOtp_useCase } from './saveAndSendOtp'
import { sendPass_useCase } from "./sendPass";
import { verifyOtp_useCase } from "./verifyOtp"; 
export default  {
  signUp_useCase,
  saveAndSendOtp_useCase,
  sendPass_useCase ,
  verifyOtp_useCase

}
