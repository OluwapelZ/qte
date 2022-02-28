import { verifyUserToken } from '../../middlewares/auth';
import { validateId, validateQuizCreation } from '../../middlewares/validation';
import QuizController from './quiz.controller';

const quizController = new QuizController();

/**
 * Quizzes APIs
 * @param {App Instance} app 
 */
const quizRoutes = (app) => {
    // Authenticated
    app.post('/quiz', validateQuizCreation, verifyUserToken, quizController.createQuiz)
    app.get('/quiz', verifyUserToken, quizController.fetchQuizzes);
    app.get('/quiz/stat/:id', verifyUserToken, validateId, quizController.fetchQuizStatById)

    // Un-authenticated. You don't have to be authenticated to take quiz
    app.get('/quiz/:id', validateId, quizController.fetchQuizById);
    app.put('/quiz/result/:id', validateId, quizController.submitQuizResutlt);
};

export default quizRoutes;
