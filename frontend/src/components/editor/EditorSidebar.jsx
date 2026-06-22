import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditorSidebar = ({
   roomId,
   language,
   setLanguage,
   users,
}) => {
   const navigate = useNavigate();
   const handleCopyRoomId = async () => {
      await navigator.clipboard.writeText(roomId);

      toast.success("Room ID copied");

   };

   const handleLeaveRoom = () => {
      toast.success("Left room successfully");
      navigate("/");

   };
   const handleLogout = () => {

      localStorage.removeItem("token");

      localStorage.removeItem("user");

      navigate("/login");
   };

   return (

      <div className="editor-sidebar">
         <div className="sidebar-top">
            <h1>SyncForge</h1>

            <p>Realtime Collaborative Code Editor</p>
         </div>

         <div className="sidebar-section">
            <label>Room ID</label>

            <div className="room-id-box">
               {roomId}
            </div>
         </div>

         <div className="sidebar-section">
            <label>Language</label>

            <select
               className="language-selector"
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
            >
               <option value="javascript">JavaScript</option>
               <option value="python">Python</option>
               <option value="java">Java</option>
               <option value="c++">C++</option>
               <option value="typescript">TypeScript</option>
            </select>
         </div>
         <div className="sidebar-section">
            <label>Connected Users</label>

            <div className="users-list">
               {users.map((user) => (
                  <div
                     key={user.socketId}
                     className="user-item"
                  >
                     • {user.username}
                  </div>
               ))}
            </div>
         </div>
         <div className="sidebar-actions">
            <button
               className="sidebar-btn"
               onClick={handleCopyRoomId}
            >
               Copy Room ID
            </button>
            <button
               className="sidebar-btn"
               onClick={handleLogout}
            >
               Logout
            </button>


            <button
               className="sidebar-btn leave-btn"
               onClick={handleLeaveRoom}
            >
               Leave Room
            </button>

         </div>
      </div>


   );
};

export default EditorSidebar;