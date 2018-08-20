import * as yup from 'yup'

const schema = yup.object().shape({
  title: yup
    .string()
    .min(6, 'Title has to be longer than 6 characters!')
    .max(20, 'Title has to be shorter than 20 characters!')
    .required('Title is required!'),
  description: yup
    .string()
    .min(15, 'Description has to be longer than 6 characters!')
    .max(300, 'Description has to be shorter than 20 characters!')
    .required('Description is required!'),
})

export default schema
