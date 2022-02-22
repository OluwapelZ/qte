import { CONSTANTS } from "../../constants";
import { ErrorResponse, NotFoundResponse, SuccessResponse, SuccessResponseWithData } from "../../utils/api-repsonse";
import QuizService from "./quiz.service";

export default class QuizController {
    constructor() {}

    async createQuiz(req, res) {
        try {
            const quizService = new QuizService();
            await quizService.createQuiz(req.body);
            SuccessResponse(res, CONSTANTS.SUCCESSFULLY_CREATED_QUIZ);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }

    async fetchQuizzes(req, res) {
        try {
            const quizService = new QuizService();
            const quizzes = await quizService.fetchQuizzes();
            SuccessResponseWithData(res, '', quizzes)
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }

    async fetchQuizById(req, res) {
        try {
            const quizService = new QuizService();
            const quiz = await quizService.fetchQuizById(req.params.id)

            if (!quiz) {
            return NotFoundResponse(res, CONSTANTS.QUIZ_NOT_FOUND);
            }
            
            SuccessResponseWithData(res, '', quiz);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }

    async submitQuizResutlt(req, res) {
        try {
            const quizService = new QuizService();
            const quiz = await quizService.submitQuizResult(req.params.id, req.body);

            SuccessResponse(res, CONSTANTS.SUCCESSFULLY_SUBMITTED_QUIZ);
        } catch (error) {
            if (error.message) {
                NotFoundResponse(res, CONSTANTS.QUIZ_NOT_FOUND);
            }

            ErrorResponse(res, JSON.stringify(error));
        }
    }

    async fetchQuizStatById(req, res) {
        try {
            const quizService = new QuizService();
            const quiz = await quizService.fetchQuizById(req.params.id)

            if (!quiz) {
            return NotFoundResponse(res, CONSTANTS.QUIZ_NOT_FOUND);
            }
            
            SuccessResponseWithData(res, '', quiz.stats);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }
}
