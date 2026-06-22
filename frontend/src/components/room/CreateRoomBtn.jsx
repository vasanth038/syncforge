import generateRoomId from "../../utils/generateRoomId";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRoomBtn = () => {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const handleCreateRoom = async () => {
        const newRoomId = generateRoomId();
        
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            await axios.post(`${backendUrl}/room/create`, { roomId: newRoomId });
            setRoomId(newRoomId);
            toast.success("Room created in database!");
        } catch (error) {
            toast.error("Failed to create room");
        }
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(roomId);
        toast.success("Room ID copied");
    }

    const handleEnterRoom = () => {
        navigate(`/editor/${roomId}`);
    };

    return (
        <div className="create-room-btn">
            <button onClick={handleCreateRoom}>
                Create Room
            </button>

            {roomId && (
                <div className="room-info-card">
                    <h3>Room Created Successfully</h3>
                    <p>{roomId}</p>
                    <div className="room-actions">
                        <button onClick={handleCopy}>Copy ID</button>
                        <button onClick={handleEnterRoom}>Enter Room</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateRoomBtn;