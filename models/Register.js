import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
    stId:{
        type:Number,
        required:true
    },
    finger:{
        type:String,
        required:true
    }
}, {timestamps:true});

const Registrations = mongoose.model('Student', RegistrationSchema);

export default Registrations;