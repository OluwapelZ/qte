import { ErrorResponse, SuccessResponseWithData } from "../../utils/api-repsonse"
import { CONSTANTS } from '../../constants';
import UserService from "./user.service"

export default class UserController {
    constructor() {}

    async createUser(req, res) {
        try {
            const userService = new UserService();
            const user = await userService.createUser(req.body);
            SuccessResponseWithData(res, CONSTANTS.SUCCESSFULLY_CREATED_USER, user);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }

    async fetchUsers(req, res) {
        try {
            const userService = new UserService();
            const users = await userService.fetchUsers();
            SuccessResponseWithData(res, CONSTANTS.SUCCESSFULLY_CREATED_USER, users);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }

    async fetchUserQuizzes(req, res) {
        try {
            const userService = new UserService();
            const userQuizzes = await userService.fetchUserQuizes(req.params.id);
            SuccessResponseWithData(res, CONSTANTS.SUCCESSFULLY_CREATED_USER, userQuizzes);
        } catch (error) {
            ErrorResponse(res, JSON.stringify(error));
        }
    }
}
