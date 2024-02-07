import React, { useState ,useEffect } from "react";
import { FaArrowAltCircleRight, FaCheck, FaTimes } from "react-icons/fa";
import  {fetchCompanies} from '../../redux/actions/adminActions'

const AdminApprovel = () => {

  const [companies , setCompanies ] = useState([])
  useEffect( ()=>{
       fetchCompanies().then((data)=>{
        setCompanies(data)
      }).catch((err)=>{
        console.error(err , 'error from te fetching company')
      })
      
  },[])
  // // Sample data
  // const companies = [
  //   {
  //     id: 1,
  //     companyName: "ABC Inc.",
  //     websiteLink: "https://www.abc.com",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2,
  //     companyName: "XYZ Corporation",
  //     websiteLink: "https://www.xyzcorp.com",
  //     status: "Rejected",
  //   },
  //   {
  //     id: 3,
  //     companyName: "EP Corporation",
  //     websiteLink: "https://www.Epcorp.com",
  //     status: "Pending",
  //   },
  //   // Add more sample data as needed
  // ];

  const [filter, setFilter] = useState("all");

  const filteredCompanies = companies.filter((company) => {
    // if (filter === "all") {
    //   return true;
    // } else {
    //   return company.status === filter;
    // }
  });

  return (
    <div className="container mx-auto mt-8 p-8">
      {/* Filter Section */}
      <div className="mb-4 flex items-center">
        <label className="mr-2">Filter:</label>
        <select
          className="p-2 border rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Pejected">Rejected</option>
          {/* Add more filter options as needed */}
        </select>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-green-500 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Sr.No</th>
              <th className="py-2 px-4">Company Name</th>
              <th className="py-2 px-4">Website Link</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">More</th>
              <th className="py-2 px-4 w-auto">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredCompanies.map((company, index) => (
              <tr key={company.id} className="bg-white border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-5">{company.companyName}</td>
                <td className="py-2 px-4">
                  <a
                    href={company.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {company.websiteLink}
                  </a>
                </td>
                <td className="py-2 px-2">{company.status}</td>
                <td className="py-2 flex justify-center text-gray-600">
                  <FaArrowAltCircleRight />
                </td>
                <td className="text-black">
                  <div className="flex justify-center">
                    {company.status === "Approved" && (
                      <FaCheck className="text-green-500 cursor-pointer mx-2" />
                    )}
                    {company.status === "Rejected" && (
                      <FaTimes className="text-red-500 cursor-pointer mx-2" />
                    )}
                    {company.status === "Pending" && (
                      <div className="flex justify-center">
                        <FaCheck className="text-green-500 cursor-pointer mx-2" />
                        <FaTimes className="text-red-500 cursor-pointer mx-2" />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApprovel;
