import { ValidationErrorWithData } from "../../utils/api-repsonse";
import { objectIdSchema } from "./schemas/objectI.id.schema";
import { createQuizSchema, submitQuizSchema } from "./schemas/quiz.schema";
import { userSchema,  } from "./schemas/user.schema";

export const validateCreateUser = (req, res, next) => {
    userSchema.validate(req.body)
    .catch((err) => ValidationErrorWithData(res, err.errors) );
    next();
}

export const validateQuizCreation = async (req, res, next) => {
    await createQuizSchema.validate(req.body)
    .catch((err) => {
        return ValidationErrorWithData(res, err.errors);
    });
    next();
}

export const validateSubmitQuiz = (req, res, next) => {
    submitQuizSchema.validate(req.body)
    .catch((err) => ValidationErrorWithData(res, err.errors) );
    next();
}

export const validateId = (req, res, next) => {
    const id = req.params.id || req.body.id;
    objectIdSchema.validate({ id })
    .catch((err) => ValidationErrorWithData(res, err.errors) );
    next();
}
