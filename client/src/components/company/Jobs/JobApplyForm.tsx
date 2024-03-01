import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { ApplicationSchema } from "@/validation/jobApplicationSchema";
import { useSelector } from "react-redux";
import { IUserSelector } from "@/interface/IUserSlice";

interface ApplicationFormProps {
  handleSubmit: (values: FormData) => void;
  handleModalClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  resume: any;
  takeResumeFromProfile: boolean;
  takeResumeOption?: string; // Added for radio button option
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  handleSubmit,
  handleModalClose,
}) => {
  const { user, error } = useSelector((state: IUserSelector) => state.user);

  return (
    <Formik
      initialValues={{
        fullName: user?.userName || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        resume: user?.resume,
        takeResumeFromProfile: false,
        takeResumeOption: "yes", // Default value for radio button
      }}
      validationSchema={ApplicationSchema}
      onSubmit={async (values: FormData, actions) => {
        await handleSubmit(values);
        handleModalClose();
        actions.setSubmitting(false);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <div className="w-full h-[500px] overflow-auto">
            <div className="w-full border-b-2 border-black p-2 h-3/12">
              <h1 className="my-1 py-2 text-lg font-bold font-sans">
                Submit Your Application
              </h1>
            </div>
            <div className="w-full h-9/12 p-4">
              <div className="mb-4 ">
                <div className="flex w-full">
                  <label
                    className="w-3/12 font-semibold font-sans text-md "
                    htmlFor="fullName"
                  >
                    Full Name :{" "}
                  </label>
                  <Field
                    className="border w-9/12 border-black py-1  px-1 ms-2 bg-gray-200 rounded focus:"
                    type="text"
                    name="fullName"
                  />
                </div>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <div className="flex w-full ">
                  <label
                    className="w-3/12 font-semibold font-sans text-md"
                    htmlFor="email"
                  >
                    Email Address :{" "}
                  </label>
                  <Field
                    className="border w-9/12 border-black py-1 px-1 ms-2 bg-gray-200 rounded focus:"
                    type="text"
                    name="email"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <div className="w-full flex">
                  <label
                    className="w-3/12 font-semibold font-sans text-md"
                    htmlFor="phoneNumber"
                  >
                    Phone Number :{" "}
                  </label>
                  <Field
                    className="border w-9/12 border-black py-1 px-1 ms-2 bg-gray-200 rounded focus:"
                    type="text"
                    name="phoneNumber"
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <h2 className="my-1 py-2 text-lg font-bold font-sans">
                  Attach Resume
                </h2>
                <div className="mb-4">
                  <p>Do you want to take the resume from your profile?</p>
                  <label>
                    <Field type="radio" name="takeResumeOption" value="yes" />
                    Yes
                  </label>
                  <label className="ml-4">
                    <Field type="radio" name="takeResumeOption" value="no" />
                    No
                  </label>
                </div>

                {values?.takeResumeOption === "no" && (
                  <div className="mb-4">
                    <label htmlFor="resume">Upload your resume</label>
                    <Field type="file" name="resume" />
                    <ErrorMessage
                      name="resume"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicationForm;
