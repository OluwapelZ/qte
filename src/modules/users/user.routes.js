import { verifyUserToken } from '../../middlewares/auth';
import { validateCreateUser, validateUserLogin } from '../../middlewares/validation';
import UserController from './user.controller';

const userController = new UserController();

/**
 * User APIs
 * @param {App Instance} app 
 */
const userRoutes = (app) => {
    app.post('/user', validateCreateUser, userController.createUser);
    app.post('/user/login', validateUserLogin, userController.userLogin)
    app.get('/user/quiz', verifyUserToken, userController.fetchUserQuizzes)
};

export default userRoutes;
