import { validateCreateUser, validateId } from '../../middlewares/validation';
import UserController from './user.controller';

const userController = new UserController();

/**
 * User APIs
 * @param {App Instance} app 
 */
const userRoutes = (app) => {
    app.post('/user', validateCreateUser, userController.createUser);
    app.get('/user', userController.fetchUsers);
    app.get('/user/:id/quiz', validateId, userController.fetchUserQuizzes)
};

export default userRoutes;
