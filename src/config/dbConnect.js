import mongoose from 'mongoose';

const mongoSecret = process.env.DATABASE_PASSWORD_MONGO;

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://bilro:${mongoSecret}@cluster0.g4bwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

const db = mongoose.connection;

export default db;
