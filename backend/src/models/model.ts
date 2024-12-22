
import mongoose, { Schema, Document } from 'mongoose';

interface Event {
  start: string;
  end?: string;
  message?: string;
}

interface Participant {
  participantId: string;
  name: string;
  events: {
    mic: Event[];
    webcam: Event[];
    screenShare: Event[];
    screenShareAudio: Event[];
    errors: Event[];
  };
  timelog: Event[];
}

interface SessionDocument extends Document {
  meetingId: string;
  start: string;
  end?: string;
  uniqueParticipantsCount: number;
  participantArray: Participant[];
}

const EventSchema = new Schema<Event>({
  start: { type: String, required: true },
  end: { type: String },
  message: { type: String },
});

const ParticipantSchema = new Schema<Participant>({
  participantId: { type: String, required: true },
  name: { type: String, required: true },
  events: {
    mic: [EventSchema],
    webcam: [EventSchema],
    screenShare: [EventSchema],
    screenShareAudio: [EventSchema],
    errors: [EventSchema],
  },
  timelog: [EventSchema],
});

const SessionSchema = new Schema<SessionDocument>({
  meetingId: { type: String, required: true, unique: true },
  start: { type: String, required: true },
  end: { type: String },
  uniqueParticipantsCount: { type: Number, default: 0 },
  participantArray: [ParticipantSchema],
});

export const Session = mongoose.model<SessionDocument>('Session', SessionSchema);
