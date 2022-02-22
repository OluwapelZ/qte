import * as mongoose from 'mongoose';

const QuestionOptionSchema = mongoose.Schema({
    letter: { type: String, required: true },
    text: { type: String, required: true },
}, {
    toJSON: {
        transform: ((doc, ret) => {
            delete ret._id
        })
    }
});

export default QuestionOptionSchema;
