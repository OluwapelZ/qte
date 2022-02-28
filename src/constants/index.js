export const CONSTANTS = {
    SUCCESSFULLY_CREATED_USER: 'Successfully created user',
    SUCCESSFULLY_FETCHED_USERS: 'Successfully retrieved users',
    SUCCESSFULLY_FETCHED_USER_QUIZZES: 'Successfully user ',
    SUCCESSFULLY_CREATED_QUIZ: 'Successfully published quiz',
    QUIZ_NOT_FOUND: 'No quiz is tied to the provided _id',
    SUCCESSFULLY_SUBMITTED_QUIZ: 'Successfully submitted quiz',
    AUTH_BEARER: 'Bearer',
};

export const ERROR_MESSAGES = {
    INVALID_TOKEN_TYPE: 'Invalid token type, please send a bearer token',
    INVALID_TOKEN: 'Invalid token',
    USER_FORBIDDEN: 'Insufficient access to make this action',
    CONFLICT_USER: 'User already exists. Please Login',
    CONFLICT_USER_DATA: 'Another user is tied to the provided email',
    INVALID_USER_CREDENTIALS: 'Invalid user credentials',
    NOT_FOUND: 'User not found'
};
