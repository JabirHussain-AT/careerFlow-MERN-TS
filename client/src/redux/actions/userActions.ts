import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IUserLoginData , ILoginForm} from "../../interface/IUserLogin";
import { AuthBaseUrl  , AuthCompanyBaseUrl} from "../../config/constants";
import { ApiError, config, handleError } from "../../config/configuration";

//signup process
export const userSignUp = createAsyncThunk('user/userSignUp' , async (userCredientials : IUserLoginData,{rejectWithValue})=>{
     try{
          const {data} = await axios.post(`${AuthBaseUrl}/sign-up`,userCredientials,config)
          return data 
     }catch(err : any){
      const axiosError = err as AxiosError<ApiError>;
          return handleError(axiosError, rejectWithValue);
     }
  })

export const userLogin = createAsyncThunk('user/userLogin' ,async (userCredentials : ILoginForm ,{rejectWithValue}) =>{
     try{
          const {data} = await axios.post(`${AuthBaseUrl}/login`,userCredentials,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})
export const isUserExist = createAsyncThunk('user/isUserExist' ,async (userCredentials : any ,{rejectWithValue}) =>{
     try{
          console.log('<<<<<<<<>>>>>>>>>>>>>>>>>>>==========================================================',userCredentials)
          const {data} = await axios.post(`${AuthBaseUrl}/exists`,userCredentials,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})

export const fetchJob = async ( jobId : any ) => {
     try {
       const { data } = await axios.get(`${AuthCompanyBaseUrl}/fetchJob/${jobId}`, config);
       return data;
     } catch (err: any) {}
   };
   



   //from here its mostly profile page data submissions actions 

   export const submitUserAboutMe = createAsyncThunk('user/userAboutMe ' ,async (userAboutMe : any ,{rejectWithValue}) =>{
     try{
          console.log('User about me :: <<<<<<<<>>>>>>>>>>>>>>>>>>>==========================================================',userAboutMe)
          const {data} = await axios.post(`${AuthBaseUrl}/exists`,userAboutMe,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})



   export const submitUserSkills = createAsyncThunk('user/userSkills ' ,async (userSkills : any ,{rejectWithValue}) =>{
     try{
          console.log('User skills :: <<<<<<<<>>>>>>>>>>>>>>>>>>>==========================================================',userSkills)
          const {data} = await axios.post(`${AuthBaseUrl}/exists`,userSkills,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})





   export const submitUserExperiance = createAsyncThunk('user/userExperiance ' ,async (userExperiances : any ,{rejectWithValue}) =>{
     try{
          console.log('User Experiances :: <<<<<<<<>>>>>>>>>>>>>>>>>>>==========================================================',userExperiances)
          const {data} = await axios.post(`${AuthBaseUrl}/exists`,userExperiances,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})




   export const submitUserEducations = createAsyncThunk('user/userEducations ' ,async (userEducations : any ,{rejectWithValue}) =>{
     try{
          console.log('User Educations  :: <<<<<<<<>>>>>>>>>>>>>>>>>>>==========================================================',userEducations)
          const {data} = await axios.post(`${AuthBaseUrl}/exists`,userEducations,config)
          return data

     }catch(err : any ){
          const axiosError = err as AxiosError<ApiError> ;
          return handleError(axiosError,rejectWithValue)
     }
})