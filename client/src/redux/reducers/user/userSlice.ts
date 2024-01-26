import { createSlice } from "@reduxjs/toolkit";
import { userSignUp } from "../../actions/userActions";
import { IUserLoginData } from "../../../interface/IUserLogin";

const userSlice = createSlice({
    name : "userSlice",
    initialState : {
        user: null as IUserLoginData | null,
        error: null as string | null,
        loading: false as boolean,
    },
    reducers : {},
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
        
    },
})

export default userSlice.reducer    