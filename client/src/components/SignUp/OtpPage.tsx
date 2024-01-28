import React, { FC, useEffect, useRef, useState } from "react";
import { OtpPageProps } from "../helper/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { userSignUp } from "../../redux/actions/userActions";
import { IUserSelector } from "../../interface/IUserSlice";

const OtpPage: FC<OtpPageProps> = ({ userData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector(
    (state: IUserSelector) => state.user
  );
  const [otp1, setOtp1] = useState<string>("");
  const [otp2, setOtp2] = useState<string>("");
  const [otp3, setOtp3] = useState<string>("");
  const [otp4, setOtp4] = useState<string>("");
  const [resendDisabled, setResendDisabled] = useState<boolean>(true);
  const [countdown, setCountdown] = useState<number>(120); // Initial countdown value in seconds
  const [focusedInput, setFocusedInput] = useState<number>(0);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      } else {
        setResendDisabled(false);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  useEffect(() => {
    inputRefs[0].current?.focus();
    setOtp1('')
    setOtp2('')
    setOtp3('')
    setOtp4('')
  }, [error]);

  const handleOtpChange = (index: number, value: string) => {
    // Update local state with entered OTP based on index
    switch (index) {
      case 1:
        setOtp1(value);
        break;
      case 2:
        setOtp2(value);
        break;
      case 3:
        setOtp3(value);
        break;
      case 4:
        setOtp4(value);
        break;
      default:
        break;
    }
    if (value.length === 1 && index <= inputRefs.length - 1) {
      inputRefs[index].current?.focus();
    }
  };

  const handleToResendOtp = async () => {
    setCountdown(120)
    setResendDisabled(true);
    console.log("called the resend button");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const totalOtp = parseInt("" + otp1 + otp2 + otp3 + otp4);
    const status = await dispatch(userSignUp({ ...userData, otp: totalOtp }));
    console.log(status, "status from th handleSubmit");
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      {error && (
        <h6 className="text-red-600 font-semibold text-center pt-5">{error}</h6>
      )}
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {userData?.email}</p>
            </div>
            {resendDisabled && (
              <span>{` OTP Valid For :  (${countdown}sec )`}</span>
            )}
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {[otp1, otp2, otp3, otp4].map((otp, index) => (
                    <div key={index} className="w-16 h-16">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        minLength={1}
                        ref={inputRefs[index]}
                        maxLength={1}
                        type="text"
                        name={`otp-${index + 1}`}
                        id={`otp-${index + 1}`}
                        value={otp}
                        onFocus={() => setFocusedInput(index)}
                        onChange={(e) =>
                          handleOtpChange(index + 1, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <a
                      className={`flex flex-row items-center ${
                        !resendDisabled ? "text-blue-600" : "text-gray-400"
                      }`}
                      rel="noopener noreferrer"
                    >
                      <button
                        onClick={handleToResendOtp}
                        disabled={resendDisabled}
                      >
                        Resend
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
