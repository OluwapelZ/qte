import * as mongoose from 'mongoose';

mongoose.connect(
    process.env.DATABASE_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) {

        } else {
            
        }
    }
);

// Get default connection
const db = mongoose.connection();

// Database connection error
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Successful database connection
db.on('connection', (stream) => console.log('Database connection successful'));