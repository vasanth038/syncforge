# SyncForge

A real-time collaborative code editor for multi-user coding sessions.

## Features

* **User Authentication** — Register and login using JWT authentication with bcrypt password hashing.
* **Collaborative Rooms** — Create or join coding rooms using unique room IDs.
* **Real-Time Code Sync** — Synchronize code changes between connected users using Socket.io.
* **Live Connected Users** — View users currently connected to the same coding room.
* **Online Code Editor** — Edit code using the Monaco Editor.
* **Protected Routes** — Restrict authenticated application features to logged-in users.
* **Responsive UI** — React-based interface designed for collaborative coding sessions.

## Tech Stack

### Frontend

* React.js
* Vite
* Monaco Editor
* React Router
* CSS

### Backend

* Node.js
* Express.js
* Socket.io

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT
* HTTP-only Cookies
* bcrypt

## Application Flow

```text
User
 │
 ▼
React Frontend
 │
 ├── Authentication ────────► Express API ────────► MongoDB
 │
 └── Join/Create Room
          │
          ▼
      Socket.io
          │
          ▼
   Collaborative Room
      ┌────┴────┐
      ▼         ▼
   User A     User B
      │         │
      └────┬────┘
           │
      Code Changes
           │
           ▼
   Real-Time Synchronization
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vasanth038/syncforge.git
cd syncforge
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:8080
```

Start the frontend:

```bash
npm run dev
```

The frontend will be available at the Vite development URL shown in the terminal.

## Authentication

SyncForge uses JWT-based authentication with HTTP-only cookies.

```text
Register
   ↓
Password hashed using bcrypt
   ↓
User stored in MongoDB
   ↓
Login
   ↓
JWT generated
   ↓
JWT stored in HTTP-only cookie
   ↓
Protected requests
   ↓
Authentication middleware
   ↓
Authorized user
```

## Real-Time Collaboration

Socket.io is used for communication between clients and the backend.

```text
Client A
   │
   │ Code Change
   ▼
Socket.io Server
   │
   │ Broadcast
   ▼
Client B
   │
   ▼
Updated Editor
```

Users connected to the same room receive code updates through Socket.io events.

## Environment Variables

### Backend

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend

```env
VITE_BACKEND_URL=http://localhost:8080
```

Do not commit `.env` files or expose secrets in the repository.

## Future Improvements

* Room expiration and automatic cleanup
* In-room chat
* Invite links
* Code execution support
* Additional programming language support
* Improved conflict handling for simultaneous edits
* Room ownership and access controls
