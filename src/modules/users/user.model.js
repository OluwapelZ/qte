import * as mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: [true, 'Please enter user\'s firstname'] },
    lastname: { type: String, required: [true, 'Please enter user\'s lastname'] },
    email: {
        type: String,
        required: [true, 'Please enter user\'s email'],
    },
    token: { type: String },
    password: {
        type: String,
        required: [true, 'Please enter user\'s password']
    },
}, { 
    timestamps: true,
    toJSON: {
        transform: ((doc, ret) => {
            delete ret.__v;
            delete ret._id;
            delete ret.password;
        })
    }
});

export default mongoose.model('User', UserSchema);
