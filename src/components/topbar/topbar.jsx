import React, { createContext, useState } from "react";
import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link, useNavigate } from "react-router-dom";
import Chatapp from "../chat/chat.jsx";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Topbar({ image_url,search }) {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For hanamburger menu



  const chatUsers = [
    { name: "John Doe", profileImage: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" },
    { name: "Jane Smith", profileImage: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" },
  ];

function handleSerach(e){
  search(e.target.value)
}


  const profileShow = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/Home/profile");
    } else {
      alert("Please log in first.");
      navigate("/"); // Redirect to login if no token
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        
        <div className="hamburger" onClick={toggleMenu}>
          <MenuIcon />
        </div>
        <div className="topbarlogo" >phtolio</div>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="search for a post or video"

            onChange={handleSerach}
          />
        </div>
        
          <Link to="/Home" className="TopbarmenuLink">Home</Link>

        
      </div>
      <div className="topbarrigth">
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
            src={image_url?image_url:"https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg"}
            alt="User Profile"
            className="topbarImage"

          />
          <button onClick={confirmLogout} className="logoutButton">Logout</button>
        </div>
      </div>

      {/* Chat Component */}
      {isChatOpen && (
        <div className="chatBackdrop" onClick={toggleChat}></div>
      )}
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

      {/* Menu for mobile view */}
      {menuOpen && (
        <div className="menuOverlay">
          <div className="menuContent">
            <div className="closeMenu" onClick={toggleMenu}>
              <CloseIcon />
            </div>
            <div className="menuLinks">
              <Link to="/Home" className="menuLink" onClick={toggleMenu}>Home</Link>
              <Link to="/Timeline" className="menuLink" onClick={toggleMenu}>Timeline</Link>
              <Link to="/Home/Profile" className="menuLink"> Profile</Link>
              <p onClick={toggleChat}>Chat</p>
              <button onClick={logoutHandler} className="menuLink">Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;
