import * as mongoose from 'mongoose';

const QuizStatSchema = mongoose.Schema({
    attempted: { type: Number, required: true },
    score: { type: Number, required: true },
    percentage: { type: Number, required: true },
    quiz_user_fullname: { type: String, required: true },
}, {
    toJSON: {
        transform: ((doc, ret) => {
            delete ret._id;
        })
    }
});

export default QuizStatSchema;
