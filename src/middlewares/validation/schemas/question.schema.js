import * as yup from 'yup';

export const questionOptionSchema = yup.object().shape({
    letter: yup.string().required().max(1, 'Enter only one character as question option'),
    text: yup.string().required('Enter question option text')
})

export const questionSchema = yup.object().shape({
    question_number: yup.number().required('Enter question list number in quiz.'),
    text: yup.string().required('Enter question text'),
    correct_option: yup.string().required().max(1, 'Enter the correct option (character) for question'),
    options: yup.array().of(questionOptionSchema).required('Question must have at least one option'),
})