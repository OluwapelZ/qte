import QuizModel from '../quizzes/quiz.model';
import UserModel from './user.model';

export default class UserService {
    constructor() {}
    
    async createUser(userData) {
        const { firstname, lastname, email } = userData;
        const user = UserModel.create({ firstname, lastname, email });
        return await user.save()
        .then((user => {
            return {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
            }
        }))
        .catch((err) => { throw err });
    }

    async fetchUsers() {
        return await UserModel.find({});
    }

    async fetchUserQuizes(userId) {
        const check = await QuizModel.find({ user_id: userId });
        return check
    }

}
