import * as yup from 'yup';
import { questionSchema } from './question.schema';

export const createQuizSchema = yup.object().shape({
    title: yup.string().required('Enter quiz title'),
    questions: yup.array().of(questionSchema).required('Quiz must have at least one question')
});

export const submitQuizSchema = yup.object().shape({
    quiz_user_fullname: yup.string().required('Please provide name of user that took the quiz'),
    answers: yup.array().of(
        yup.object().shape({
            question_id: yup.number().required('Enter quiz question id'),
            selected_option: yup.string().required().max(1, 'Enter user selected option character'),
            correct: yup.boolean().required('Enter if user got answer or not with boolean(true|false)'),
        })
    )
});
