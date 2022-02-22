import * as yup from 'yup';

export const userSchema = yup.object().shape({
    firstname: yup.string().required('Please enter your firstname'),
    lastname: yup.string().required('Please enter your lastname'),
    email: yup.string().email('Please enter a valid email')
});
