import storage from "redux-persist/lib/storage";

export const AuthBaseUrl = 'http://localhost:3002/api/users/user'
export const persistConfig = {
    key:"root",
    version:1,
    storage
}