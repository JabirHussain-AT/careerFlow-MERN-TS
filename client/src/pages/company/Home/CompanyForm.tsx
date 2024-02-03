import React, { useState } from 'react';
import NavBar from '../../../components/user/Login/NavBar';
import Img1 from '../../../assets/company1.png';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import companySchema from '../../../validation/companySchema';
import { AppDispatch } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { IUserSelector } from '../../../interface/IUserSlice';
import { companyForm } from '../../../redux/actions/companyActions';

Modal.setAppElement('#root');

const CompanyForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: IUserSelector) => state.user);

  const handleContinueClick = () => {
    setIsModalOpen(true);
  };
  const validationSchema = companySchema

  const modalStyles = {
    content: {
      width: 'calc(2/3 * 100%)',
      maxWidth: '800px',
      height: '500px',
      margin: 'auto',
      top: '80%',
      transform: 'translateY(-50%)',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px', 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  // Formik form handling
  const formik = useFormik({
    initialValues: {
      registrationId: '',
      address: '',
      phoneNumber: '',
      totalEmployees: '',
      vision: '',
      founded: '',
      logo: undefined,
      linkedIn: '',
    },
    validationSchema,
    onSubmit: (values) => {
      
      dispatch(companyForm(values))
      console.log('Form submitted:', values);
      handleCloseModal();
    },
  });

  return (
    <>
      <NavBar />
      <div className='bg-white w-full h-5/6 flex flex-col sm:flex-row justify-between items-center'>
        <div className='sm:ml-24 sm:mt-18 text-center sm:text-left'>
          <h2 className='text-3xl font-mono font-semibold py-8'>Welcome to <span className='text-blue-500'>careerFlow</span></h2>
          <h1 className='text-5xl'>Let's Find Your <br />Next Great Hire</h1>
          <h5 className='text-xl text-gray-600 font-serif mt-4'>Login to your Indeed for Employers dashboard to <br /> manage your job post, find resumes,<br /> start interviewing candidates </h5>
        </div>
        <div className='sm:flex sm:justify-start w-full sm:w-1/2 mt-10'>
          <img className='sm:mt-0 w-full h-auto sm:w-5/6' src={Img1} alt="img1" />
        </div>
      </div>
      <div className='text-center w-full h-auto'>
        <button
          className='rounded border mt-10 py-3 text-white font-mono font-bold px-4 bg-blue-500 hover:bg-blue-700'
          onClick={handleContinueClick}
        >
          Complete your Profile For Continue . . .
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyles}
      >

        <div className="relative">

        {error && (
              <div className="bg-red-500 z-[999] text-center mb-2 text-white text-sm py-2 px-3 rounded-md mt-3">
                {error}
              </div>
            )}



          <h2 className="text-black font-mono font-bold text-center mb-4">Company Registration Form</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="registrationId" className="block text-black">Company Registration ID:</label>
              <input
                type="text"
                id="registrationId"
                name="registrationId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.registrationId}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.registrationId && formik.errors.registrationId ? 'border-red-500' : ''}`}
              />
              {formik.touched.registrationId && formik.errors.registrationId && (
                <div className="text-red-500 mt-1">{formik.errors.registrationId}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-black">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.address && formik.errors.address ? 'border-red-500' : ''}`}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-500 mt-1">{formik.errors.address}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-black">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''}`}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-red-500 mt-1">{formik.errors.phoneNumber}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="totalEmployees" className="block text-black">Total Employees:</label>
              <input
                type="number"
                id="totalEmployees"
                name="totalEmployees"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.totalEmployees}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.totalEmployees && formik.errors.totalEmployees ? 'border-red-500' : ''}`}
              />
              {formik.touched.totalEmployees && formik.errors.totalEmployees && (
                <div className="text-red-500 mt-1">{formik.errors.totalEmployees}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="vision" className="block text-black">Vision:</label>
              <textarea
                id="vision"
                name="vision"
                rows={3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vision}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.vision && formik.errors.vision ? 'border-red-500' : ''}`}
              />
              {formik.touched.vision && formik.errors.vision && (
                <div className="text-red-500 mt-1">{formik.errors.vision}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="founded" className="block text-black">Founded:</label>
              <input
                type="text"
                id="founded"
                name="founded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.founded}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.founded && formik.errors.founded ? 'border-red-500' : ''}`}
              />
              {formik.touched.founded && formik.errors.founded && (
                <div className="text-red-500 mt-1">{formik.errors.founded}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="logo" className="block text-black">Logo:</label>
              <input
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={(event) => formik.setFieldValue('logo', event.currentTarget.files?.[0])}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.logo && formik.errors.logo ? 'border-red-500' : ''}`}
              />
              {formik.touched.logo && formik.errors.logo && (
                <div className="text-red-500 mt-1">{formik.errors.logo}</div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="linkedIn" className="block text-black">LinkedIn:</label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                placeholder="https://www.linkedin.com/company/example"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkedIn}
                className={`w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 ${formik.touched.linkedIn && formik.errors.linkedIn ? 'border-red-500' : ''}`}
              />
              {formik.touched.linkedIn && formik.errors.linkedIn && (
                <div className="text-red-500 mt-1">{formik.errors.linkedIn}</div>
              )}
            </div>
            <button type="submit" className="rounded bg-blue-500 text-white px-4 py-2">
              Submit
            </button>
          <span className='bg-gray-500 ml-6 rounded px-4 py-2 text-white ' onClick={handleCloseModal} ><button className="text-white mt-4 mx-auto " ></button>Cancel</span>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CompanyForm;
