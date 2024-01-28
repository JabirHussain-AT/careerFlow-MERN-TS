import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/user/userSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    user: userSlice,  // <-- Corrected key to 'user'
  },
});

export default store;
