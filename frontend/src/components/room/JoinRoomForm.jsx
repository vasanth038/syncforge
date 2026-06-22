import { useNavigate } from "react-router-dom";
import { useState } from "react";

const JoinRoomForm = () => {
    const [roomId , setRoomId] = useState("");
    const navigate = useNavigate() ;
    const handleEnterRoom = () =>{
         if (!roomId.trim()) {
      alert("Please enter a room ID");

      return;
    }

       navigate(`/editor/${roomId}`);
    }
    return (
        <div className="join-room-form">
            <input
                type="text"
                placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)} 

            />
  
            <button onClick={handleEnterRoom}>
                Join Room
            </button>
        </div>
    );
};

export default JoinRoomForm;