import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import validationSchema from "../../../validation/jobAddingValidation"; // Replace with the correct path
import Dropdown from "@/components/common/Dropdown";

const CompanyJobsForm: React.FC = () => {
  const [selectedJobType, setSelectedJobType] = useState<string>("");

  const handleJobTypeChange = (selectedOption: string, setFieldValue: Function) => {
    setSelectedJobType(selectedOption);
    setFieldValue("selectedJobType", selectedOption);
  };

  const handleSubmit = (values: any) => {
    console.log("Form data:", values);
    // You can perform further actions like API calls or other processing here
  };

  return (
    <div className="w-full">
      <h2 className="text-md font-mono px-5 py-3 font-bold underline">
        Post A Job
      </h2>
      <div className="w-full text-black">
        <div className="lg:w-5/6 mx-auto">
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              selectedJobType: "",
              selectedCategory: "",
              jobTitle: "",
              jobDescription: "",
              requirements: [""],
              skills: [""],
              salary: "",
              jobExpiry: "",
              vacancy: "",
            }}
            validationSchema={validationSchema}
          >
            {({ setFieldValue }) => (
              <Form className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <label>Job Title</label>
                  <Field
                    name="jobTitle"
                    as={Input}
                    placeholder="Enter Job Title"
                    type="text"
                    className="bg-white"
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <label> Job Type <br /> </label>
                  <Dropdown
                    button={
                      <div className="btn rounded-md px-5 py-2 text-sm bg-white ">
                        {selectedJobType || "Select Job Type"}
                      </div>
                    }
                    title="Select Job Type"
                    options={["Full time", "Part Time", "Remote"]}
                    onChange={(selectedOption: string) => handleJobTypeChange(selectedOption, setFieldValue)}
                  />
                  <ErrorMessage
                    name="selectedJobType"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <label>Selected Category</label>
                  <Field
                    name="selectedCategory"
                    as={Input}
                    placeholder="Enter Category"
                    type="text"
                    className="bg-white"
                  />
                  <ErrorMessage
                    name="selectedCategory"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* ... Repeat the pattern for other fields ... */}

                <div className="w-full px-2 mb-4">
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobsForm;
