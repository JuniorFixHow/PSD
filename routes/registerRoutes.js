import express from 'express'
import { createRegistration, getAllRegistration, deleteRegistration } from '../controllers/registerController.js';
const router = express.Router();

router.post('/', createRegistration);
router.get('/', getAllRegistration);
router.delete('/:id', deleteRegistration)

export default router