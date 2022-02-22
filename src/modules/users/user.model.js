import * as mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: [true, 'Please enter user\'s firstname'] },
    lastname: { type: String, required: [true, 'Please enter user\'s lastname'] },
    email: {
        type: String,
        required: [true, 'Please enter user\'s email'],
    },
}, { 
    timestamps: true,
    toJSON: {
        transform: ((doc, ret) => {
            delete ret.__v;
        })
    }
});

export default mongoose.model('User', UserSchema);
