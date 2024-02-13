import * as Yup from 'yup';

const validationSchema = Yup.object({
  selectedJobType: Yup.string().required('Job Type is required'),
  selectedCategory: Yup.string().required('Category is required'),
  jobTitle: Yup.string().required('Job Title is required'),
  jobDescription: Yup.string().required('Job Description is required'),
  requirements: Yup.array().of(Yup.string().required('Requirement is required')),
  skills: Yup.array().of(Yup.string().required('Skill is required')),
  salary: Yup.string().required('Salary is required'),
  jobExpiry: Yup.string().required('Job Expiry is required'),
  vacancy: Yup.number().required('Number of Vacancies is required').positive('Number of Vacancies must be a positive number'),
});

export default validationSchema;
