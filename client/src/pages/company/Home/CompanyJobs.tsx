import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompanyJobs = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <button className='bg-blue-500 px-3 py-2  rounded-md m-3 text-white' onClick={()=>navigate('/company/add-jobs')}> Add Jobs</button>
    </div>
  )
}

export default CompanyJobs