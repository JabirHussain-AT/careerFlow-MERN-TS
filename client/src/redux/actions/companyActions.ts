import { createAsyncThunk, } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IUserLoginData , ILoginForm} from "../../interface/IUserLogin";
import { AuthCompanyBaseUrl } from "../../config/constants";
import { ApiError, config, handleError } from "../../config/configuration";

//signup process
export const companySignUp = createAsyncThunk('compnay/SignUp' , async (companyCredientials : IUserLoginData,{rejectWithValue})=>{
     try{
        console.log(' IF IT IS HERE IT IS SUCCESS UNTIL HERE OKAY ')
          const {data} = await axios.post(`${AuthCompanyBaseUrl}/sign-up`,companyCredientials,config)
          return data 
     }catch(err : any){
      const axiosError = err as AxiosError<ApiError>;
          return handleError(axiosError, rejectWithValue);
     }
  })

export const companyLogin = createAsyncThunk('company/Login' ,async (userCredentials : ILoginForm ,{rejectWithValue}) =>{
     try{
          const {data} = await axios.post(`${AuthCompanyBaseUrl}/login`,userCredentials,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})



