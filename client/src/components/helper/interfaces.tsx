export interface SignUpFormValues {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    otp?: number;
  }

export interface OtpPageProps {
    userData: SignUpFormValues;
  }
