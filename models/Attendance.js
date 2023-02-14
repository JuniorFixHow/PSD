import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
    finger:{
        type:String,
        required:true
    }
}, {timestamps:true});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;