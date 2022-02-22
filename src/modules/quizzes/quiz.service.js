import QuizModel from './quiz.model';

export default class QuizService {
    constructor() {}

    async createQuiz(quizData) {
        const quiz = await QuizModel.create({
            user_id: quizData.userId,
            title: quizData.title,
            total_questions: quizData.questions.length,
            stats: [],
            questions: quizData.questions
        });

        await quiz.save()
        .then((quiz => quiz))
        .catch((err) => { throw err });
    }

    async fetchQuizzes() {
        return await QuizModel.find({});
    }

    async fetchQuizById(quizObjectId) {
        return await QuizModel.findById(quizObjectId);
    }

    async submitQuizResult(quizObjectId, quizResult) {
        const quiz = await QuizModel.findById(quizObjectId);
        if (!quiz) throw new Error('Not Found');

        const correctAnswers = quizResult.answers.filter((answer) => answer.correct === true)
        const attempted = quizResult.answers.length;
        const score = correctAnswers.length;

        const stats = {
            attempted,
            score,
            percentage: ((score/quiz.questions.length) * 100),
            quiz_user_fullname: quizResult.quiz_user_fullname
        }

        quiz.stats.push(stats);
        await QuizModel.findByIdAndUpdate(quizObjectId, quiz);
        return;
    }
}
