import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast"; 
import socket from "../components/socket";
import EditorSidebar from "../components/editor/EditorSidebar";
import CodeEditor from "../components/editor/CodeEditor";
import "./EditorPage.css";

const EditorPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();


  const userString = localStorage.getItem("user");
  const user = userString && userString !== "undefined" ? JSON.parse(userString) : null;
  const username = user?.name || "Anonymous";

  const [users, setUsers] = useState([]);
  const [code, setCode] = useState("// Start coding here...");
  const [language, setLanguage] = useState("javascript");


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (!roomId) return;

    socket.emit("join-room", { roomId, username });
    console.log("Joining room:", roomId);

    socket.on("error", ({ message }) => {
      toast.error(message);
      navigate("/");
    });

    socket.on("update-users", (usersList) => {
      setUsers(usersList);
    });

    socket.on("code-sync", (initialCode) => setCode(initialCode || ""));
    socket.on("code-update", ({ code }) => setCode(code));

    return () => {
      socket.off("error");
      socket.off("update-users");
      socket.off("code-sync");
      socket.off("code-update");
    };
  }, [roomId, username, navigate]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit("code-change", { roomId, code: newCode });
  };

  return (
    <div className="editor-page">
      <EditorSidebar
        roomId={roomId}
        users={users}
        language={language}
        setLanguage={setLanguage}
      />
      <CodeEditor 
        code={code} 
        setCode={handleCodeChange} 
        language={language} 
      />
    </div>
  );
};

export default EditorPage;