import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import registerRoutes from './routes/registerRoutes.js'
import attendanceRoutes from './routes/attendanceRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'
import Connect from './Db.js';

const app = express();
Connect();
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongo disconnected');
})
mongoose.connection.on('connected', ()=>{
    console.log('Mongo is back!');
})

app.use(cors());
app.use(express.json());

app.use('/api/sessions', sessionRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/registration', registerRoutes);

const PORT = 7000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})