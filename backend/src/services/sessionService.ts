import { Session } from "../models/model";


export const createSession = async (meetingId: string, start: string) => {
  const session = new Session({ meetingId, start });
  return await session.save();
};

export const addParticipant = async (
  meetingId: string,
  participant: {
    participantId: string;
    name: string;
  }
) => {
  const session = await Session.findOne({ meetingId });
  if (!session) throw new Error("Session not found");

  session.participantArray.push({
    participantId: participant.participantId,
    name: participant.name,
    events: { mic: [], webcam: [], screenShare: [], screenShareAudio: [], errors: [] },
    timelog: [],
  });
  session.uniqueParticipantsCount = session.participantArray.length;

  return await session.save();
};

export const logEvent = async (
    meetingId: string,
    participantId: string,
    eventType: string,
    event: { start: string; end?: string; message?: string }
  ) => {
    const validEventTypes = ['mic', 'webcam', 'screenShare', 'screenShareAudio', 'errors'] as const;
  
    if (!validEventTypes.includes(eventType as any)) {
      throw new Error(`Invalid event type: ${eventType}`);
    }
  
    const session = await Session.findOne({ meetingId });
    if (!session) throw new Error("Session not found");
  
    const participant = session.participantArray.find(
      (p) => p.participantId === participantId
    );
    if (!participant) throw new Error("Participant not found");
  
    participant.events[eventType as typeof validEventTypes[number]].push(event);
    return await session.save();
  };
  
  

export const endSession = async (meetingId: string, end: string) => {
  const session = await Session.findOneAndUpdate(
    { meetingId },
    { end },
    { new: true }
  );
  if (!session) throw new Error("Session not found");

  return session;
};

export const getSessions = async (page: number, limit: number) => {
  return await Session.find()
    .skip((page - 1) * limit)
    .limit(limit);
};
