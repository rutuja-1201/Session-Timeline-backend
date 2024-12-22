import { Router } from 'express';
import {
  startSession,
  addParticipantHandler,
  logEventHandler,
  endSessionHandler,
  getSessionsHandler,
} from '../controllers/sessionController';

const router = Router();

router.post('/sessions', startSession);
router.post('/sessions/:meetingId/participants', addParticipantHandler);
router.post('/sessions/:meetingId/participants/:participantId/events/:eventType', logEventHandler);
router.put('/sessions/:meetingId/end', endSessionHandler);
router.get('/sessions', getSessionsHandler);

export default router;
