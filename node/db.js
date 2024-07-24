import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URL_LOCAL)
const db = mongoose.connection;  // 3. Get the default connection

// Define event listeners
db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

// Error event listener
db.on('error', (error) => {
    console.error("MongoDB connection error:", error);
});

// Disconnected event listener
db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

// 5. Export database connection
export default db
