# ⚡ SyncForge

*A Real-Time Collaborative Code Editor engineered for seamless multi-user development.*

 ## 📖 Overview
SyncForge is a high-performance, full-stack coding environment that allows multiple developers to write, share, and synchronize code concurrently. Designed with low-latency WebSockets and a modern glassmorphism UI, it provides an isolated, secure, and visually intuitive workspace ideal for technical interviews, pair programming, and team debugging.

## ✨ Core Features
* **Real-Time Synchronization:** Sub-millisecond code updates and state management across all connected clients.
* **Isolated Coding Rooms:** Unique, collision-free room generation for private collaborative sessions.
* **Secure Session Management:** Cryptographically secure JWT-based user authentication and bcrypt password hashing.
* **Responsive Glassmorphism Interface:** A sleek, distraction-free UI prioritizing code readability and modern web aesthetic trends.

## 🛠️ Technical Architecture
* **Frontend Engine:** React.js, Vite
* **Backend Server:** Node.js, Express.js
* **Real-Time Communication:** Socket.io (Event-driven bidirectional syncing)
* **Database & ORM:** MongoDB Atlas, Mongoose

  ** ststructure **
syncforge/
├── backend/                  # ⚙️ Server-side code (Node.js/Express/Socket.io)
│   ├── config/               # Database and environment configurations
│   │   └── db.js             
│   ├── controllers/          # Business logic for API endpoints
│   │   ├── authController.js 
│   │   └── authMiddleware.js 
│   ├── models/               # Mongoose database schemas
│   │   ├── Room.js           
│   │   └── User.js           
│   ├── routes/               # API route definitions
│   │   ├── authRoutes.js     
│   │   └── userRoutes.js     
│   ├── socket/               # Real-time WebSocket event handlers
│   │   └── socketHandler.js  
│   ├── .env                  # Backend environment variables (Git ignored)
│   ├── .gitignore            
│   ├── app.js                # Express app setup and middleware
│   ├── package.json          
│   ├── package-lock.json     
│   └── server.js             # Main entry point: starts Express server and Socket.io
│
└── frontend/                 # 💻 Client-side code (React/Vite)
    ├── public/               # Static assets that bypass Vite's build system
    │   └── favicon.png       
    ├── src/                  # React source code
    │   ├── assets/           # Images, fonts, etc., processed by Vite
    │   │   └── logo.png      
    │   ├── components/       # Reusable UI elements
    │   │   ├── editor/       # Code editor specific components
    │   │   │   ├── CodeEditor.jsx
    │   │   │   └── EditorSidebar.jsx
    │   │   └── room/         # Room management components
    │   │       ├── CreateRoomBtn.jsx
    │   │       ├── HeroSection.jsx
    │   │       └── JoinRoomForm.jsx
    │   ├── pages/            # Top-level route components
    │   │   ├── EditorPage.jsx
    │   │   ├── EditorPage.css
    │   │   ├── HomePage.jsx
    │   │   ├── HomePage.css
    │   │   ├── LoginPage.jsx
    │   │   ├── LoginPage.css
    │   │   └── SignupPage.jsx
    │   ├── routes/           # React Router setup
    │   │   └── AppRoutes.jsx 
    │   ├── utils/            # Helper functions
    │   │   └── generateRoomId.js
    │   ├── App.jsx           # Root component
    │   ├── index.css         # Global CSS styles
    │   ├── main.jsx          # React DOM mounting point
    │   └── socket.js         # Socket.io client instance initialization
    ├── .env                  # Frontend environment variables (Git ignored)
    ├── .gitignore            
    ├── index.html            # Main HTML template
    ├── package.json          
    ├── package-lock.json     
    ├── README.md             
    └── vite.config.js        # Vite bundler configuration
---
*Designed and developed by S Vasantha Kumar.*
