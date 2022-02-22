import { validateId, validateQuizCreation } from '../../middlewares/validation';
import QuizController from './quiz.controller';

const quizController = new QuizController();

/**
 * Quizzes APIs
 * @param {App Instance} app 
 */
const quizRoutes = (app) => {
    app.post('/quiz', validateQuizCreation, quizController.createQuiz)
    app.get('/quiz', quizController.fetchQuizzes);
    app.get('/quiz/:id', validateId, quizController.fetchQuizById);
    app.put('/quiz/result/:id', validateId, quizController.submitQuizResutlt);
    app.get('/quiz/stat/:id', validateId, quizController.fetchQuizStatById)
};

export default quizRoutes;
