import React from "react";
import Draggable from "react-draggable";
import "./chat.css";

function Chatapp({ className, chatUsers, onClose }) {
  return (
    <Draggable >
    <div className={`chatContainer ${className}`}>
      <div className="chatHeader">
        <span className="chatTitle">Chat</span>
        <button className="chatCloseButton" onClick={onClose}>X</button>
      </div>
      <div className="chatList">
        {chatUsers.map((user, index) => (
          <div className="chatUser" key={index}>
            <img src={user.profileImage} alt="User" className="chatUserImage" />
            <span className="chatUserName">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
    </Draggable>
  );
}

export default Chatapp;
