// BrowseJob.tsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "@/components/user/Home/NavBar";
import SearchBar from "@/components/user/FindJob/SearchBar";
import AllJobs from "@/components/user/FindJob/AllJobs";
import BannerFindJob from "@/components/user/FindJob/BannerFindJob";
import FilterSidebar from "@/components/user/FindJob/FilterSideBar";
import { fetchJobsMain } from "@/redux/actions/userActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const BrowseJob: React.FC = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState("");
  const [sectionVisibility, setSectionVisibility] = useState({
    employmentTypes: true,
    categories: true,
    salaryRange: true,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(
          fetchJobsMain({
            categories: categories,
            jobType: employmentTypes,
            salary: salaryRange,
            search: searchQuery,
          })
        );
        console.log(result )
        // if (result && result.data) {
        //   setFilteredData(result.data);
        // }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categories, employmentTypes, salaryRange, searchQuery]);

  useEffect(() => {
    const typeOfEmploymentParam = searchParams.get("typeOfEmployment");
    const categoriesParam = searchParams.get("category");
    const salaryRangeParam = searchParams.get("salaryRange");
    const searchParam = searchParams.get("search");

    if (typeOfEmploymentParam) {
      setEmploymentTypes(typeOfEmploymentParam.split(","));
    }

    if (categoriesParam) {
      setCategories(categoriesParam.split(","));
    }

    if (salaryRangeParam) {
      setSalaryRange(salaryRangeParam);
    }

    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    console.log("Search Query in BrowseJob:", query);

    // Update URL with search query
    updateURLParams({ search: query });
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

      updateURLParams({ typeOfEmployment: updatedTypes.join(",") });

      return updatedTypes;
    });
  };

  const handleCategoryChange = (category: string) => {
    setCategories((prevCategories) => {
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category];

      updateURLParams({ category: updatedCategories.join(",") });

      return updatedCategories;
    });
  };

  const handleSalaryRangeChange = (range: string) => {
    setSalaryRange(range);
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

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams}`
    );
  };

  const getRangeValue = (salaryRangeLabel: string) => {
    switch (salaryRangeLabel) {
      case "Below 3 LPA":
        return 0;
      case "3-10 LPA":
        return 8; // Adjust the value based on the range distribution
      case "More than 10 LPA":
        return 15;
      default:
        return 0;
    }
  };

  const getSalaryRangeLabel = (value: number) => {
    if (value < 4) {
      return "Below 3 LPA";
    } else if (value < 12) {
      return "3-10 LPA";
    } else {
      return "More than 10 LPA";
    }
  };

  return (
    <div className="h-full flex justify-center bg-green-200 flex-col">
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <BannerFindJob />
      <div className="w-11/12  ml-8"></div>
      <div className="flex-1 m-3 bg-white shadow-lg mx-20 rounded bg-white-700 flex justify-center">
        {/* Use the FilterSidebar component here */}
        <FilterSidebar
          employmentTypes={employmentTypes}
          categories={categories}
          salaryRange={salaryRange}
          sectionVisibility={sectionVisibility}
          handleEmploymentTypeChange={handleEmploymentTypeChange}
          handleCategoryChange={handleCategoryChange}
          handleSalaryRangeChange={handleSalaryRangeChange}
          toggleSectionVisibility={toggleSectionVisibility}
          getRangeValue={getRangeValue}
          getSalaryRangeLabel={getSalaryRangeLabel}
        />
        <div className="w-3/5">
          {/* Content of the main section */}
          <AllJobs />
        </div>
      </div>
    </div>
  );
};

export default BrowseJob;
