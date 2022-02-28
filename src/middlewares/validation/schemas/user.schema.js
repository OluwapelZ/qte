import * as yup from 'yup';

export const userSchema = yup.object().shape({
    firstname: yup.string().required('Please enter your firstname'),
    lastname: yup.string().required('Please enter your lastname'),
    email: yup.string().email('Please enter a valid email'),
    password: yup.string().required('Password field cannot be empty')
    .min(8, 'Password must be at least 8 characters')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must have at lease one number, lower case, uppercase and special character'
    )
});

export const userLoginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email field cannot be empty'),
    password: yup.string().required('Password field cannot be empty')
    .min(8, 'Password must be at least 8 characters')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must have at lease one number, lower case, uppercase and special character'
    )
});
