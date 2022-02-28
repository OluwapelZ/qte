import * as jwt from 'jsonwebtoken';
import { config } from '../config';

export const tokenizeUser = (userId) =>  jwt.sign(
    { userId },
    config.auth_secret,
    {
        expiresIn: "2h",
    }
);

export const verifyToken = (token) => (jwt.verify(token, config.auth_secret)).userId;

