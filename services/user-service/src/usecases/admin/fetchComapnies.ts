import fetchRequest from '../../adapters/messageBroker/kafka/produces/fetchReqToCompany'

export const fetchCompanies_useCase = (dependencies: any): any => {

  const {
    repositories :{
        userRepo : {saveOtp}
    }
} = dependencies ;

 const interactor = async (  )=>{
    console.log('here at fetchRequest ')
    const data = await fetchRequest()
    return data

 }
 return {interactor}
};
