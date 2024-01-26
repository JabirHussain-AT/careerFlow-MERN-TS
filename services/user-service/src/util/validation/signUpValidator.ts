import * as Yup from 'yup'

const sigUpValidationSchema = Yup.object().shape({
    userName : Yup.string().required("user name is required")
})