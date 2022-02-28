import { tokenizeUser } from '../../utils/jwt';
import QuizModel from '../quizzes/quiz.model';
import * as bcrypt from 'bcryptjs';
import UserModel from './user.model';

export default class UserService {
    constructor() {}
    
    async createUser(userData) {
        const { firstname, lastname, email, password } = userData;

        const isUserExisting = await UserModel.findOne({ email });
        if (isUserExisting) {
            return { status: false }
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword
        });

        user.token = tokenizeUser(user._id);
        const createdUser = await user.save()
        .then((user => user))
        .catch((err) => { throw err });

        return {
            status: true,
            data: createdUser
        };
    }

    async fetchUserQuizes(userId) {
        return await QuizModel.find({ user_id: userId });
    }

    async userLogin(loginData) {
        // Destructure user login data
        const { email, password } = loginData;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return { status: false };
        }

        const isValidpassword = await bcrypt.compare(password, user.password);
        if (!isValidpassword) {
            return { status: false };
        }

        user.token = tokenizeUser(user._id, user.roleId);

        await user.save()
        .catch(err => { throw err });

        return {
            status: true,
            data: user
        };
    }

}
