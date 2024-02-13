import Dropdown from "@/components/common/Dropdown";
import { FaPlus, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodError } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  selectedJobType: z
    .string()
    .regex(/^\S+(?:\s\S+)*$/)
    .min(5, { message: "Select a Job Type" }),
  selectedCategory: z
    .string()
    .regex(/^\S+(?:\s\S+)*$/)
    .min(1, { message: "Select a Category" }),
  jobTitle: z
    .string()
    .regex(/^\S+(?:\s\S+)*$/)
    .min(1, { message: "Enter a Job Title" }),
  jobDescription: z.string().min(8, { message: "Enter the job description" }),
  requirements: z
  .array(z.string().refine((val) => /^\S.*\S$/.test(val)))
  .refine((val) => val.length >= 1, {
    message: "Add at least one Requirement",
  }),

  skills: z
    .array(z.string().regex(/^\S.*\S$/))
    .refine((val) => val.length >= 1, {
      message: "Add at least one Skill",
    }),
  salary: z.string().regex(/^\d+-\d+$/, {
    message: "Invalid Salary format. Use: 50000-100000",
  }),
  jobExpiry: z
    .string()
    .refine((val) => !!val, { message: "Select a Job Expiry date" }),
  vacancy: z.string().min(1, { message: "Enter a valid number of Vacancies" }),
});


const CompanyJobs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
      requirements: [""],
      skills: [""],
      salary: "",
      jobExpiry: "",
      vacancy: "",
    },
  });

  // const [selectedJobType, setSelectedJobType] = useState<string>("");
  // const [selectedCategory, setSelectedCategory] = useState<string>("");
  // const [jobTitle, setJobTitle] = useState<string>("");
  // const [jobDescription, setJobDescription] = useState<string>("");
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [skills, setSkills] = useState<string[]>([""]);
  // const [salary, setSalary] = useState<string>("");
  // const [jobExpiry, seExpiry] = useState<string>("");
  // const [formErrors, setFormErrors] = useState<string[]>([]);
  // const [vacancy, setVacancy] = useState<number>(0);
  // const [salaryRange, setSalaryRange] = useState<{ min: string; max: string }>({
  //   min: "",
  //   max: "",
  // });

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("onSubmit function called");
    // Validation with zod here (if needed)
    console.log("Form data:", data);
  };
  console.log(form.formState.errors);

  

  // const handleJobTypeChange = (selectedOption: string) => {
  //   setSelectedJobType(selectedOption);
  // };

  // const handleCategoryChange = (selectedOption: string) => {
  //   setSelectedCategory(selectedOption);
  // };

  const handleRequirementsChange = (index: number, value: string) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = [...requirements];
    updatedRequirements.splice(index, 1);
    setRequirements(updatedRequirements);
  };

  // const handleSkillsChange = (index: number, value: string) => {
  //   const updatedSkills = [...skills];
  //   updatedSkills[index] = value;
  //   setSkills(updatedSkills);
  // };

  const addSkill = () => {
    console.log("clicked");
    setSkills([...skills, ""]);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  // const handleSalaryChange = (value: string) => {
  //   setSalary(value);
  //   const [min, max] = value.split("-");
  //   setSalaryRange({ min, max });
  // };
  // ... (other state update functions remain the same)


  return (
    <div className="w-full">
      <h2 className="text-md font-mono px-5 py-3 font-bold underline">
        Post A Job
      </h2>
      <div className="w-full text-black">
        <div className="lg:w-5/6 mx-auto">
          <Form {...form}>
            <form
              className="flex flex-wrap"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <FormLabel> Job Title </FormLabel>
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <div>
                      <Input
                        {...field}
                        placeholder="Enter Job Title"
                        type="text"
                        className="bg-white"
                      />
                      <FormMessage>
                        {form.formState.errors?.jobTitle?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              <div className="w-full lg:w-1/2 px-2 mb-4 flex justify-center items-center mt-6">
                <FormLabel> Job Type</FormLabel>
                <FormField
                  control={form.control}
                  name="selectedJobType"
                  render={({ field }) => (
                    <div className="ms-5">
                      <Dropdown
                        button={
                          <div className="btn rounded-md px-5 ms-3 py-2 text-sm bg-white">
                            {field.value || "Select Job Type"}
                          </div>
                        }
                        title="Select Job Type"
                        options={["Full time", "Part Time", "Remote"]}
                        onChange={(selectedOption) =>
                          field.onChange(selectedOption)
                        }
                      />
                      <FormMessage className=" ml-5">
                        {form.formState.errors.selectedJobType?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              <div className="w-full lg:w-1/2 px-2 mb-4">
                <FormLabel>Select Category</FormLabel>
                <FormField
                  control={form.control}
                  name="selectedCategory"
                  render={({ field }) => (
                    <div>
                      <Dropdown
                        button={
                          <div className="btn rounded-md px-5 ms-3 py-2 text-sm bg-white">
                            {field.value || "Select Category"}
                          </div>
                        }
                        title="Select Category"
                        options={["Category 1", "Category 2", "Category 3"]}
                        onChange={(selectedOption) =>
                          field.onChange(selectedOption)
                        }
                      />
                      <FormMessage className=" ml-5">
                        {form.formState.errors.selectedCategory?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              <div className="w-full lg:w-full px-2 mb-4">
                <FormLabel>Job Description</FormLabel>
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <div>
                      <textarea
                        className="w-full py-2 px-3 border border-b-2 rounded"
                        placeholder="Enter Job Description"
                        {...field}
                      />
                      <FormMessage className=" ml-5">
                        {form.formState.errors.jobDescription?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              <div className="w-full lg:w-full px-2 mb-4">
                <FormLabel>Job Expiry</FormLabel>
                <FormField
                  control={form.control}
                  name="jobExpiry"
                  render={({ field }) => (
                    <div>
                      <input
                        type="date"
                        className="w-full py-2 px-3 border border-b-2 rounded"
                        placeholder="Enter the expiry date"
                        {...field}
                      />
                      <FormMessage className=" ml-5">
                        {form.formState.errors.jobExpiry?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              <div className="w-full lg:w-full px-2 mb-4">
                <FormLabel>No of Vacancies</FormLabel>
                <FormField
                  control={form.control}
                  name="vacancy"
                  render={({ field }) => (
                    <div>
                      <input
                        type="number"
                        className="w-full py-2 px-3 border border-b-2 rounded"
                        placeholder=""
                        {...field}
                      />
                      <FormMessage className=" ml-5">
                        {form.formState.errors.vacancy?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              <div className="w-full lg:w-full px-2 mb-4">
                <FormLabel>Requirements (Enter point by point)</FormLabel>
                <ul>
                {requirements.map((requirement, index) => (
  <li key={index} className="flex items-center mb-2">
    <FormField
      control={form.control}
      name={`requirements.${index}`}
      render={({ field }) => (
        <div className="w-full">
          <input
            className="w-full py-2 px-3 border border-b-2 rounded mr-2"
            type="text"
            placeholder="Add a Requirement"
            {...field}
          />
          <FormMessage className="ml-5">
            {form.formState.errors?.requirements?.[index]?.message}
          </FormMessage>
        </div>
      )}
    />
    {index === requirements.length - 1 && (
      <FaPlus
        className="cursor-pointer"
        onClick={addRequirement}
      />
    )}
    {index !== requirements.length - 1 && (
      <FaTrash
        className="cursor-pointer"
        onClick={() => removeRequirement(index)}
      />
    )}
  </li>
))}

                </ul>
              </div>

              <div className="w-full lg:w-full px-2 mb-4">
                <div className="w-full lg:w-full px-2 mb-4">
                  <FormLabel>Skills</FormLabel>
                  <div className="font-sans">
                    <div className="flex flex-wrap items-center">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center mb-2 mr-2"
                        >
                          {skills.length > 0 && (
                            <FormField
                              control={form.control}
                              name={`skills[${index}]` as `skills.${number}`}
                              render={({ field }) => (
                                <div className="bg-white flex justify-between items-center px-4 gap-2 border-2 rounded-md ">
                                  <p className="font-semibold text-sm font-mono">
                                    {field.value}
                                  </p>
                                  {field.value.length > 0 && (
                                    <FaTrash
                                      className="cursor-pointer text-gray-800 text-sm"
                                      onClick={() => removeSkill(index)}
                                    />
                                  )}
                                </div>
                              )}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center mb-2">
                      <FormField
                        control={form.control}
                        name={`skills[${skills.length}]` as `skills.${number}`}
                        render={({ field }) => (
                          <div className="w-full">
                            <input
                              className="w-full py-2 px-3 border border-b-2 rounded mr-2"
                              type="text"
                              placeholder="Add a Skill"
                              {...field}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  addSkill();
                                }
                              }}
                            />
                            <FormMessage className="ml-5">
                              <FormMessage className="ml-5">
                                {
                                  form.formState.errors.skills?.message}
                              </FormMessage>
                            </FormMessage>
                          </div>
                        )}
                      />
                      <FaPlus
                        className="cursor-pointer text-blue-500 hover:text-blue-700"
                        onClick={addSkill}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-2 mb-4">
                <FormLabel>Salary</FormLabel>
                <FormField
                  control={form.control}
                  name="salary"
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        className="w-full py-2 px-3 border border-b-2 rounded"
                        type="text"
                        placeholder="Enter Salary (e.g., 50000-100000)"
                      />
                      <FormMessage className="ml-5">
                        {form.formState.errors.salary?.message}
                      </FormMessage>
                    </div>
                  )}
                />
              </div>

              {/* ... (remaining form elements) */}

              <div className="w-full px-2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default CompanyJobs;
