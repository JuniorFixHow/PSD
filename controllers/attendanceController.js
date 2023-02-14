import Attendance from "../models/Attendance.js";
import Registrations from "../models/Register.js";
import Sessions from "../models/Session.js"

export const createAttendance= async(req, res)=>{
    try {
        const student = await Registrations.findOne({finger:req.body.finger});
        if(!student){
            res.status(404).json("You haven't registered for this course");
        }
        else{
            const seesionId = req.params.sessionid;
            try {
                const session = await Sessions.findById(seesionId);
                const list = await Promise.all(session.students.map((stud)=>{
                    return Attendance.findById(stud)     
                }))

                const isMatch = list.filter((st)=>st.finger ===student.finger)
                // console.log(isMatch)

                if(isMatch.length){
                    res.status(422).json("You have already taken attendance today");
                    // console.log('error')
                }
                else{
                    const attendance = new Attendance(req.body);
                    try {
                        const saveAttendance =await attendance.save();
                        try {
                            await Sessions.findByIdAndUpdate(seesionId, {
                                $push: {students:saveAttendance._id}
                            })
                        } catch (err) {
                            console.log(err)
                        }
                        res.status(200).json(saveAttendance);
                    } catch (err) {
                        console.log(err)
                    }
                }

                // .then( (result)=>{
                // })
                // .catch(err=>{
                //     console.log(err)
                // })

            } catch (err) {
                console.log(err)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
export const updateAttendance= async(req, res)=>{
    try {
        const updatedAttendance= await Attendance.findByIdAndUpdate(
            req.params.id, {$set:req.body}, {new:true}
        );
        res.status(200).json(updatedAttendance);
    } catch (err) {
        console.log(err)
    }
}
export const deleteAttendance= async(req, res)=>{
    const sessionId = req.params.sessionid;
    try {
        const deletedAttendance = await Attendance.findByIdAndDelete(
            req.params.id
        );
        try {
            await Sessions.findByIdAndUpdate(sessionId, {
                $pull:{students:req.params.id},
            });
        } catch (err) {
            console.log(err)
        }
        res.status(200).json('Attendance Deleted Successfully');
    } catch (err) {
        console.log(err)
    }
}
export const getAttendance= async(req, res)=>{
    try {
        const attendance = await Attendance.findById(
            req.params.id
        );
        res.status(200).json(attendance);
    } catch (err) {
        console.log(err)
    }
}
export const getAllAttendance= async(req, res)=>{
    try {
        const attendances = await Attendance.find();
        res.status(200).json(attendances);
    } catch (err) {
        console.log(err)
    }
}
