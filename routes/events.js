import express from "express";
import { authentication } from '../middlewares/authentication.js';
import { createEvent, deleteEvent, addParticipant, removeParticipant,fetchEventById, fetchAllEvents } from "../controllers/events.js";

const router = express.Router();

router.get('/',fetchAllEvents);

router.get('/:eventId',fetchEventById);

router.post('/create', authentication, createEvent);

router.post('/delete', authentication, deleteEvent);

router.post('/participant/update', authentication, addParticipant);

router.post('/participant/remove', authentication, removeParticipant);

export default router;