import React from "react";
import { useFormik } from "formik";
import { TEInput } from "tw-elements-react";
import GoogleButton from "../Login/GoogleButton";
import { LoginFormProps } from "../../interface/IUserLogin";
import { FormData } from '../../interface/IUserLogin';
import { validationSchema } from '../../validation/LoginFormValdiation';


const LoginForm: React.FC<LoginFormProps> = ({ textToshow, submitLink }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values, submitLink);
    }
  });
  
  const handleFormSubmit = (values: FormData, submitLink: string) => {
    console.log('Form Data:', values, `submitted to ${submitLink}`);
  };
  


  return (
    <section className="h-[500px] mr-10">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div className='text-center mt-0 mb-5'>
              <h1 className='text-3xl font-bold mb-2'>Welcome to Career<span className="text-blue-500">Flow</span></h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <GoogleButton />

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              {/* Email input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-500 mb-1"
                >
                  Email
                </label>
                <TEInput
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border border-gray-300 rounded p-2 w-full ${formik.touched.email && formik.errors.email && 'border-red-500'}`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                )}
              </div>

              {/* Password input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-gray-500 mb-1"
                >
                  Password
                </label>
                <TEInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border border-gray-300 rounded p-2 w-full ${formik.touched.password && formik.errors.password && 'border-red-500'}`}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                )}
              </div>

              <div className="mb-6 flex items-center justify-between">
                <a href="#!" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button className="bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black rounded transition duration-300 ease-in-out transform hover:bg-blue-700">
                  Login
                </button>
                <div className="w-full flex justify-between items-center">
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?{" "}
                    <a
                      href="#!"
                      className="text-blue-700 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </a>
                  </p>
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    {textToshow}{" "}
                    <a
                      href="#!"
                      className="text-blue-700 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Click here
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
