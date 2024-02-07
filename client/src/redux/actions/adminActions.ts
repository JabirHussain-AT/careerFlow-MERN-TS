import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { AuthBaseAdminUrl } from "../../config/constants";
import { ApiError, config, handleError } from "../../config/configuration";

interface FetchCompaniesArgs {
  rejectWithValue: any; // Adjust the type according to your needs
}

// fetching companies
export const fetchCompanies = async () => {
  try {
    const { data } = await axios.get(`${AuthBaseAdminUrl}/fetch-companies`, config);
    return data;
  } catch (err: any) {
     console.error(err, '=== error from fetching companies')
  }
};
