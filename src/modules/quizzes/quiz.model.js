import * as mongoose from 'mongoose';
import QuestionSchema from '../questions/question.schema';
import QuizStatSchema from './stats/stat.model';

const QuizSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.ObjectId, required: true },
    title: { type: String, required: true },
    total_questions: { type: Number, required: true },
    stats: [QuizStatSchema],
    questions: [QuestionSchema],
}, {
    toJSON: {
        transform: ((doc, ret) => {
            delete ret.__v
        })
    }
});

export default mongoose.model('Quiz', QuizSchema);
