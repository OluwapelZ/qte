import dotenv from 'dotenv';

dotenv.config()
export const config = {
    auth_secret: process.env.AUTH_SECRET || '',
    database_url: process.env.DATABASE_URL || process.env.TEST_DATABASE_URL,
}