import React, { useState } from "react";
import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link, useNavigate } from "react-router-dom";
import Chatapp from "../chat/chat.jsx";

function Topbar({ image_url }) {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const chatUsers = [
    { name: "John Doe", profileImage: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" },
    { name: "Jane Smith", profileImage: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" },
  ];

  const profileShow = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/Home/profile");
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(true);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <span className="topbarlogo">imagelogo</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="search for a post or video"
          />
        </div>
      </div>
      <div className="topbarrigth">
        <div className="topbarLinks">
          <span className="topbarLink">
            <Link to={"/Home"} className="link">Home</Link>
          </span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem" onClick={toggleChat}>
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsActiveIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <img
            onClick={profileShow}
            src={image_url}
            alt="Profile"
            className="topbarImage"
          />
          <button onClick={confirmLogout} className="logoutButton">Logout</button>
        </div>
      </div>
      {/* Chat Component */}
      {isChatOpen && (
        <Chatapp
          className={isChatOpen ? "open" : ""}
          chatUsers={chatUsers}
          onClose={toggleChat}
        />
      )}
      
      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="logoutConfirmModal">
          <div className="logoutConfirmContent">
            <p>Are you sure you want to logout?</p>
            <button onClick={logoutHandler} className="confirmButton">Yes</button>
            <button onClick={cancelLogout} className="cancelButton">No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;
