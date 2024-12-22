**Project Overview**
The backend is a Node.js application using Express.js for building RESTful APIs. It is designed to manage sessions, participants, and their associated events.

**Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn (for package management)
- Database: MongoDB
- .env file for configuration

**Setup Instructions**
1. **Clone the repository**
   ```
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory with the following content:
   ```
   PORT=5000
   DB_URI=mongodb://localhost:27017/session-timeline
   ```

4. **Run the application**
   ```
   npm start
   ```

**API Documentation**

| **HTTP Method** | **Endpoint**                                    | **Description**                    | **Required Parameters**               |
|-----------------|------------------------------------------------|------------------------------------|---------------------------------------|
| POST            | `/api/sessions`                               | Create a new session               | `name`, `startTime`, `duration`       |
| GET             | `/api/sessions`                               | Get all sessions                   | None                                  |
| POST            | `/api/sessions/:id/participants`              | Add participant to a session       | `name`, `id`                          |
| POST            | `/api/sessions/:meetingId/participants/:participantId/events/:eventType` | Log participant events             | `eventType`, `start`, `end`           |

