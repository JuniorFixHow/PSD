import Attendance from "../models/Attendance.js";
import Sessions from "../models/Session.js"

export const createSession = async(req, res)=>{
    const session = new Sessions(req.body);
    try {
        const saveSession = await session.save();
        res.status(200).json(saveSession);
    } catch (err) {
        console.log(err)
    }
}
export const updateSession = async(req, res)=>{
    try {
        const updatedSession = await Sessions.findByIdAndUpdate(
            req.params.id, {$set:req.body}, {new:true}
        );
        res.status(200).json(updatedSession);
    } catch (err) {
        console.log(err)
    }
}
export const deleteSession = async(req, res)=>{
    try {
        const deletedSession = await Sessions.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json('Session Deleted Successfully');
    } catch (err) {
        console.log(err)
    }
}
export const getSession = async(req, res)=>{
    try {
        const session = await Sessions.findById(
            req.params.id
        );
        res.status(200).json(session);
    } catch (err) {
        console.log(err)
    }
}
export const getAllSession = async(req, res)=>{
    try {
        const sessions = await Sessions.find();
        res.status(200).json(sessions);
    } catch (err) {
        console.log(err)
    }
}
export const getSessionAttendance = async(req, res)=>{
    try {
        const session = await Sessions.findById(req.params.id);
        const list = await Promise.all(session?.students?.map((student)=>{
            return Attendance.findById(student)
        }));
        res.status(200).json(list);
    } catch (err) {
        console.log(err)
    }
}