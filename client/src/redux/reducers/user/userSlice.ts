import { createSlice } from "@reduxjs/toolkit";
import { userSignUp, userLogin } from "../../actions/userActions";
import { IUserLoginData } from "../../../interface/IUserLogin";
import { persistReducer } from "redux-persist";
import { persistConfig } from "../../../config/constants";
import { companyLogin, companySignUp } from "../../actions/companyActions";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null as IUserLoginData | null,
    error: null as string | null,
    loading: false as boolean,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as IUserLoginData;
        state.error = null;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as IUserLoginData;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // company cases

      .addCase(companySignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(companySignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as IUserLoginData;
        state.error = null;
      })
      .addCase(companySignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(companyLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(companyLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as IUserLoginData;
        state.error = null;
      })
      .addCase(companyLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export default persistedUserReducer;
