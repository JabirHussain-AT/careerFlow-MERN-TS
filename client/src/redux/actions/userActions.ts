import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IUserLoginData } from "../../interface/IUserLogin";
import { AuthBaseUrl } from "../../config/constants";
import { ApiError, config, handleError } from "../../config/configuration";


export const userSignUp = createAsyncThunk('user/userSignUp' , async (userCredientials : IUserLoginData,{rejectWithValue})=>{
     try{
          const {data} = await axios.post(`${AuthBaseUrl}/sign-up`,userCredientials,config)
          return data 
     }catch(err){
      const axiosError = err as AxiosError<ApiError>;
          return handleError(axiosError, rejectWithValue);
     }
  })