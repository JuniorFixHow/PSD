import Attendance from "../models/Attendance.js";
import Registrations from "../models/Register.js"

export const createRegistration = async(req, res)=>{
    const {stId, finger} = req.body;
    try {
        Registrations.find({stId}).then(result=>{
            if(result.length){
                res.status(422).json("Student ID belongs to someone");
            }else{
                Registrations.find({finger}).then(result=>{
                    if(result.length){
                        res.status(422).json('You have already registered for this course');
                    }
                    else{
                        const saveRegistration = new Registrations({stId, finger})
                        saveRegistration.save();
                        res.status(200).json(saveRegistration);
                    }
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
}
export const updateRegistration = async(req, res)=>{
    try {
        const updatedRegistration = await Registrations.findByIdAndUpdate(
            req.params.id, {$set:req.body}, {new:true}
        );
        res.status(200).json(updatedRegistration);
    } catch (err) {
        console.log(err)
    }
}
export const deleteRegistration = async(req, res)=>{
    try {
        const deletedRegistration = await Registrations.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json('Registration Deleted Successfully');
    } catch (err) {
        console.log(err)
    }
}
export const getRegistration = async(req, res)=>{
    try {
        const registeration = await Registrations.findById(
            req.params.id
        );
        res.status(200).json(registeration);
    } catch (err) {
        console.log(err)
    }
}
export const getAllRegistration = async(req, res)=>{
    try {
        const registerations = await Registrations.find();
        res.status(200).json(registerations);
    } catch (err) {
        console.log(err)
    }
}
