
import { NextFunction, Request, Response } from 'express';
import {
  createSession,
  addParticipant,
  logEvent,
  endSession,
  getSessions,
} from '../services/sessionService'

export const startSession = async (req: Request, res: Response) => {
  const { meetingId, start } = req.body;
  try {
    const session = await createSession(meetingId, start);
    res.status(201).json(session);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const addParticipantHandler = async (req: Request, res: Response) => {
  const { meetingId } = req.params;
  const participant = req.body;
  try {
    const session = await addParticipant(meetingId, participant);
    res.status(201).json(session);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const logEventHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { meetingId, participantId, eventType } = req.params;
    const event = req.body;
  
    try {
      const session = await logEvent(meetingId, participantId, eventType, event);
      res.status(200).json(session);
    } catch (error: any) {
      next(error); // Pass the error to Express' error handling middleware
    }
  };
  

export const endSessionHandler = async (req: Request, res: Response) => {
  const { meetingId } = req.params;
  const { end } = req.body;
  try {
    const session = await endSession(meetingId, end);
    res.status(200).json(session);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const getSessionsHandler = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  try {
    const sessions = await getSessions(page, limit);
    res.status(200).json(sessions);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
