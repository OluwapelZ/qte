import * as yup from 'yup';

export const objectIdSchema = yup.object().shape({
    id: yup.string().min(24).max(24).required()
});
