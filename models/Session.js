import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
    },
    courseCode:{
        type:String,
        required:true,
    },
    gps:
        {
            lat:Number,
            long:Number
        }
    ,
    ongoing:{
        type:Boolean,
        default:true,
    },
    starts:{
        type:String,
        required:true,
    },
    ends:{
        type:String,
        required:true,
    },
    students:[String]
}, {timestamps:true})

const Sessions = mongoose.model('Session', sessionSchema);
export default Sessions