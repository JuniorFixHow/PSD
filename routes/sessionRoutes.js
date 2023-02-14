import express from 'express';
import { 
    createSession, 
    getAllSession, 
    getSession, 
    updateSession,
    getSessionAttendance, 
    deleteSession
} 
from '../controllers/sessionController.js';
const router = express.Router();

router.post('/', createSession);
router.get('/', getAllSession);
router.get('/:id', getSession);
router.delete('/:id', deleteSession);
router.put('/:id', updateSession)
router.get('/attendance/:id', getSessionAttendance)

export default router