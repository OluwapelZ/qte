import { CONSTANTS, ERROR_MESSAGES } from "../../constants";
import { UnauthorizedResponse } from "../../utils/api-repsonse";
import { verifyToken } from '../../utils/jwt';

const extractToken = (req, res) => {
    const tokenPayload = req.headers['authorization'];
    const tokenPayloadArray = String(tokenPayload).split(' ');
    if (tokenPayloadArray[0] !== CONSTANTS.AUTH_BEARER) {
        return UnauthorizedResponse(res, ERROR_MESSAGES.INVALID_TOKEN_TYPE);
    }

    return tokenPayloadArray[1];
}

export const verifyUserToken = (req, res, next) => {
    const token = extractToken(req, res);

    try {
        req.user = verifyToken(token);
    } catch (err) {
        return UnauthorizedResponse(res, ERROR_MESSAGES.INVALID_TOKEN);
    }

    next();
}