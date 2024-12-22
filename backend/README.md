**Project Overview**
The backend is a Node.js application using Express.js for building RESTful APIs. It is designed to manage sessions, participants, and their associated events.

**Prerequisites**
Node.js (v16+ recommended)
npm or yarn (for package management)
Database: MongoDB 
.env file for configuration


**Setup Instructions**
Clone the repository

git clone 
cd backend
Install dependencies


**npm install**
Environment Variables Create a .env file in the root directory.

PORT=5000
DB_URI=mongodb://localhost:27017/session-timeline


Run the application



**HTTP Method**
Description	Required Parameters
POST	/api/sessions	Create a new session	name, startTime, duration
GET	/api/sessions	Get all sessions	
POST	/api/sessions/:id/participants	Add participant to a session	name, id
POST	/api/sessions/:meetingId/participants/:participantId/events/:eventType	Log participant events	eventType, start, end
