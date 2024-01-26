export interface IUserLoginData {
    userName: string | null,
    email:string | null,
    password?:string | null,
    phone?:string | null 
    otp?:number | null,
    profilePic?:string | null
}
export interface FormData {
    email: string;
    password: string;
    rememberMe: boolean;
  }
export interface LoginFormProps {
  textToshow: string;
  submitLink: string;
}
