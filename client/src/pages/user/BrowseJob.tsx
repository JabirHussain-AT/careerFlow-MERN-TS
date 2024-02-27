import SearchBar from "@/components/user/FindJob/SearchBar";
import NavBar from "@/components/user/Home/NavBar";
import { BiArrowToBottom } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BrowseJob: React.FC = () => {
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState("");
  const [sectionVisibility, setSectionVisibility] = useState({
    employmentTypes: true,
    categories: true,
    salaryRange: true,
  });
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Use URL parameters to set initial state
    const typeOfEmploymentParam = searchParams.get("typeOfEmployment");
    const categoriesParam = searchParams.get("category");
    const salaryRangeParam = searchParams.get("salaryRange");

    if (typeOfEmploymentParam) {
      setEmploymentTypes(typeOfEmploymentParam.split(","));
    }

    if (categoriesParam) {
      setCategories(categoriesParam.split(","));
    }

    if (salaryRangeParam) {
      setSalaryRange(salaryRangeParam);
    }
  }, [searchParams]);

  const handleSearch = (query: string) => {
    // Logic to filter jobs based on selected filter values (employmentTypes, categories, salaryRange)
    console.log("Search Query in BrowseJob:", query);
  };

  const toggleSectionVisibility = (section: string) => {
    setSectionVisibility((prevVisibility: any) => ({
      ...prevVisibility,
      [section]: !prevVisibility[section],
    }));
  };

  const handleEmploymentTypeChange = (type: string) => {
    setEmploymentTypes((prevTypes) => {
        const updatedTypes = prevTypes.includes(type)
          ? prevTypes.filter((t) => t !== type)
          : [...prevTypes, type];
  
        // Update URL parameter
        updateURLParams({ typeOfEmployment: updatedTypes.join(",") });
  
        return updatedTypes;
      });
  };

  const handleCategoryChange = (category: string) => {
    setCategories((prevCategories) => {
        const updatedCategories = prevCategories.includes(category)
          ? prevCategories.filter((c) => c !== category)
          : [...prevCategories, category];
  
        // Update URL parameter
        updateURLParams({ category: updatedCategories.join(",") });
  
        return updatedCategories;
      });   
    }

  const handleSalaryRangeChange = (range: string) => {
    setSalaryRange(range);
    // Update URL parameter
    updateURLParams({ salaryRange: range });
  };

  const updateURLParams = (params: Record<string, string>) => {
    const newSearchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value);
      } else {
        newSearchParams.delete(key);
      }
    });

    // Replace the URL without triggering a full page reload
    window.history.replaceState({}, "", `${window.location.pathname}?${newSearchParams}`);
  };

  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <div className="flex-1 m-3 border-2 rounded bg-white-700 flex">
        <div className="w-1/5 bg-white border-2 rounded-sm p-5 bor m-5 flex flex-col">
          {/* Employment Type Checkboxes */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="font-bold " onClick={() => toggleSectionVisibility('employmentTypes')}>
                Types of Employment
              </h1>
              <BiArrowToBottom
                onClick={() => toggleSectionVisibility('employmentTypes')} 
                className={`transform ${sectionVisibility.employmentTypes ? 'rotate-180' : ''} duration-300`}
              />
            </div>
            {sectionVisibility.employmentTypes && (
              <div className="ml-2">
                {["Full Time", "Part Time", "Remote"].map((type) => (
                  <label key={type} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value={type}
                      checked={employmentTypes.includes(type)}
                      onChange={() => handleEmploymentTypeChange(type)}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Categories Checkboxes */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="font-bold" onClick={() => toggleSectionVisibility('categories')}>
                Categories
              </h1>
              <BiArrowToBottom
              onClick={() => toggleSectionVisibility('categories')}
                className={`transform ${sectionVisibility.categories ? 'rotate-180' : ''} duration-300`}
              />
            </div>
            {sectionVisibility.categories && (
              <>
                {["Design", "Sales", "Engineering"].map((category) => (
                  <label key={category} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value={category}
                      checked={categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </>
            )}
          </div>
          {/* Salary Range Dropdown */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h1 className="font-bold" onClick={() => toggleSectionVisibility('salaryRange')}>
                Salary Range
              </h1>
              <BiArrowToBottom
              onClick={() => toggleSectionVisibility('salaryRange')}
                className={`transform ${sectionVisibility.salaryRange ? 'rotate-180' : ''} duration-300`}
              />
            </div>
            {sectionVisibility.salaryRange && (
              <select
                className="block w-full mt-1 p-2 border rounded"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
              >
                <option value="">All</option>
                {/* Add salary range options */}
              </select>
            )}
          </div>
        </div>
        <div className="w-4/5 bg-orange-400 h-screen m-5">
          {/* Content of the main section */}
        </div>
      </div>
    </div>
  );
};

export default BrowseJob;
