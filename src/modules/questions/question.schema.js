import * as mongoose from 'mongoose';
import QuestionOptionSchema from './question.option.schema';

const QuestionSchema = mongoose.Schema({
    id: { type: Number, required: true },
    text: { type: String, required: true },
    correct_option: { type: String, required: true },
    options: [QuestionOptionSchema],
}, {
    toJSON: {
        transform: ((doc, ret) => {
            delete ret._id
        })
    }
});

export default QuestionSchema;
