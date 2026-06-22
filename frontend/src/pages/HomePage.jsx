import { useNavigate } from "react-router-dom";
import HeroSection from "../components/room/HeroSection";
import CreateRoomBtn from "../components/room/CreateRoomBtn";
import JoinRoomForm from "../components/room/JoinRoomForm";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const userString = localStorage.getItem("user");
  const user = userString && userString !== "undefined" ? JSON.parse(userString) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-page">
      <nav className="home-nav">
        <div className="nav-logo">SyncForge</div>
        <div className="nav-actions">
          {user ? (
            <>
              <span className="welcome-text">
                Hi, <b>{user.name}</b>
              </span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="signup-btn" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <HeroSection />
      <CreateRoomBtn />
      <JoinRoomForm />
    </div>
  );
};

export default HomePage;