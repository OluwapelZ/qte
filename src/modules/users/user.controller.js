import { ConflictDataResponse, ErrorResponse, SuccessResponseWithData } from "../../utils/api-repsonse"
import { CONSTANTS, ERROR_MESSAGES } from '../../constants';
import UserService from "./user.service"

export default class UserController {
    constructor() {}

    async createUser(req, res) {
        try {
            const userService = new UserService();
            const user = await userService.createUser(req.body);

            if (!user.status) {
                return ConflictDataResponse(res, ERROR_MESSAGES.CONFLICT_USER)
            }

            return SuccessResponseWithData(res, CONSTANTS.SUCCESSFULLY_CREATED_USER, user.data);
        } catch (error) {
            console.log(error)
            return ErrorResponse(res, error.message);
        }
    }

    async userLogin(req, res) {
        try {
            const userService = new UserService();
            const user = await userService.userLogin(req.body);

            if (!user.status) {
                return UnauthorizedResponse(res, ERROR_MESSAGES.INVALID_USER_CREDENTIALS);
            }

            return SuccessResponseWithData(res, '', user.data);
        } catch (error) {
            return ErrorResponse(res, error.message);
        }
    }

    async fetchUserQuizzes(req, res) {
        try {
            const userService = new UserService();
            const userQuizzes = await userService.fetchUserQuizes(req.user);
            SuccessResponseWithData(res, '', userQuizzes);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }
}
