import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO ).
        then(()=>{
            console.log('Mongo Connected Successfully')
        })
    } catch (err) {
        console.log(err)
    }
}

export default Connect;