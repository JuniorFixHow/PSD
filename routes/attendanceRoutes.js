import express from 'express';
import { 
    createAttendance, 
    deleteAttendance, 
    getAllAttendance, 
    getAttendance, 
    updateAttendance 
} 
from '../controllers/attendanceController.js';
const router = express.Router();

router.post('/:sessionid', createAttendance);
router.put('/:id', updateAttendance);
router.delete('/:id/:sessionid', deleteAttendance);
router.get('/:id', getAttendance);
router.get('/', getAllAttendance);

export default router