// ... (imports remain the same)

import Dropdown from "@/components/common/Dropdown";
import { FaPlus, FaTrash } from "react-icons/fa";
import React, { useState } from "react";

const CompanyJobs = () => {
  const [selectedJobType, setSelectedJobType] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [skills, setSkills] = useState<string[]>([""]);
  const [salary, setSalary] = useState<string>("");
  const [jobExpiry , seExpiry] = useState<string>("")
  const [vacancy , setVacancy] = useState<number>(0)
  const [salaryRange, setSalaryRange] = useState<{ min: string; max: string }>({
    min: "",
    max: "",
  });

  const handleJobTypeChange = (selectedOption: string) => {
    setSelectedJobType(selectedOption);
  };

  const handleCategoryChange = (selectedOption: string) => {
    setSelectedCategory(selectedOption);
  };

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

  const handleSkillsChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSalaryChange = (value: string) => {
    setSalary(value);
    const [min, max] = value.split("-");
    setSalaryRange({ min, max });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Selected Job Type:", selectedJobType);
    console.log("Selected Category:", selectedCategory);
    console.log("Job Title:", jobTitle);
    console.log("Job Description:", jobDescription);
    console.log("Requirements:", requirements);
    console.log("Skills:", skills);
    console.log("Salary:", salary);
    console.log("Salary Range:", salaryRange);
    console.log("no of vacacy available :", vacancy);
    console.log("expiry of job :", jobExpiry);
    // Add your form submission logic here
  };

  return (
    <div className="w-full">
      <h2 className="text-md font-mono px-5 py-3 font-bold underline">
        Post A Job
      </h2>
      <div className="w-full text-black">
        <div className="lg:w-5/6 mx-auto">
          <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="jobTitle"
              >
                Job Title
              </label>
              <input
                className="w-full py-2 px-3 border border-b-2 rounded"
                id="jobTitle"
                type="text"
                placeholder="Enter Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="jobType"
              >
                Job Type
              </label>
              <Dropdown
                button={
                  <div className="btn rounded-md px-5 py-2 text-sm bg-white ">
                    {selectedJobType || "Select Job Type"}
                  </div>
                }
                title="Select Job Type"
                options={["Full time", "Part Time", "Remote"]}
                onChange={handleJobTypeChange}
              />
            </div>

            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="category"
              >
                Select Category
              </label>
              <Dropdown
                button={
                  <div className="btn rounded-md px-5 py-2 text-sm bg-white ">
                    {selectedCategory || "Select Category"}
                  </div>
                }
                title="Select Category"
                options={["Category 1", "Category 2", "Category 3"]}
                onChange={handleCategoryChange}
              />
            </div>


            <div className="w-full lg:w-full px-2 mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="jobDescription"
              >
                Job Description
              </label>
              <textarea
                className="w-full py-2 px-3 border border-b-2 rounded"
                id="jobDescription"
                placeholder="Enter Job Description"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-full px-2 mb-4">
            <label
                className="block text-sm font-semibold mb-2"
                htmlFor="calender date selection"
              >
                Job expiry
              </label>
              <input
                 type="date"
                className="w-full py-2 px-3 border border-b-2 rounded"
                id="dateof_expiry"
                placeholder="Enter the expiry date"
                value={jobExpiry}
                onChange={(e) => seExpiry(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-full px-2 mb-4">
            <label
                className="block text-sm font-semibold mb-2"
                htmlFor="calender date selection"
              >
               No of Vacancies
              </label>
              <input
                 type="number"
                className="w-full py-2 px-3 border border-b-2 rounded"
                id="numberOfVacancy"
                placeholder=""
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
              />
            </div>


            <div className="w-full lg:w-full px-2 mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="requirements"
              >
                Requirements (Enter point by point)
              </label>
              <ul>
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input
                      className="w-full py-2 px-3 border border-b-2 rounded mr-2"
                      type="text"
                      placeholder="Add a Requirement"
                      value={requirement}
                      onChange={(e) =>
                        handleRequirementsChange(index, e.target.value)
                      }
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
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="skills"
              >
                Skills
              </label>
              <div className="font-sans ">
                <div className="flex flex-wrap items-center">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center mb-2 mr-2">
                      {skills.length > 0 && (
                        <div className="bg-white flex justify-between items-center px-4 gap-2 border-2 rounded-md ">
                          <p className=" font-semibold text-sm  font-mono">
                            {skill}
                          </p>
                          {skill.length > 0 && (
                            <FaTrash
                              className="cursor-pointer text-gray-800 text-sm"
                              onClick={() => removeSkill(index)}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center mb-2">
                  <input
                    className="w-full py-2 px-3 border border-b-2 rounded mr-2"
                    type="text"
                    placeholder="Add a Skill"
                    value={skills[skills.length - 1]}
                    onChange={(e) =>
                      handleSkillsChange(skills.length - 1, e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                  />
                  <FaPlus
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                    onClick={addSkill}
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="salary"
              >
                Salary
              </label>
              <input
                className="w-full py-2 px-3 border border-b-2 rounded"
                id="salary"
                type="text"
                placeholder="Enter Salary (e.g., 50000-100000)"
                value={salary}
                onChange={(e) => handleSalaryChange(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default CompanyJobs;
