import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://bilro:8NV7wAzE5T0o28Zp@cluster0.g4bwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
// mongoose.connect('mongodb://127.0.0.1:27017/ecomm-account?authSource=admin');

const db = mongoose.connection;

export default db;
