import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import healthRoutes from './src/modules/health/health.route'
import quizRoutes from './src/modules/quizzes/quiz.route';
import userRoutes from './src/modules/users/user.routes';
import mongoose from 'mongoose';
require('express-group-routes');

dotenv.config()

const app = express();

// Setup morgan logger.
if(process.env.NODE_ENV !== "test") { // Don't use log when in test
	app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Database Connection
 */
const MONGODB_URL=process.env.DATABASE_URL
mongoose
.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to Database \"%s\"", MONGODB_URL);
	}
})
.catch(err => {
    console.error("App failed to start: Database connection error:", err.message);
    process.exit(1);
});

/**
 * QUIZZES APIs
 */
healthRoutes(app);
quizRoutes(app);
userRoutes(app);

export default app;
