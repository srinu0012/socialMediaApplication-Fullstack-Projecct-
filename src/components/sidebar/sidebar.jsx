import { useEffect, useState } from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
// import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from '@mui/icons-material/Logout';
import Closefriend from "../../closefriends/closefriend";
import axios from "axios";

import Chatapp from "../chat/chat";
import { Link, useNavigate } from "react-router-dom";

let arr = ["srinu", "jogendra", "siva", "sari", "asma", "john", "doe", "jane", "kate"];

const chatUsers = [
  { name: "John Doe", profileImage: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" },
  { name: "Jane Smith", profileImage: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" },
];


function Sidebar() {
  const [showAllFriends, setShowAllFriends] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // To track the active sidebar item

  const [chatopen,setchatopen]=useState(false)

  const [friends,setfriends]=useState([])

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => setShowAllFriends(!showAllFriends);

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  useEffect(()=>{
    getclosefriends()
  },[])


  async function getclosefriends(){
   let token=localStorage.getItem("token")

    let response=await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/getFriendsDetails/${token}`)
   
    setfriends(response.data)
  }

const handlechats=()=>{
  setchatopen(!chatopen)
}


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
    <div className="sideBar">
      <div className="sidebarWraper">
        <ul className="sidebarList">
          <li
            className={`sidebarListItem ${activeItem === "feed" ? "active" : ""}`}
            onClick={() => handleActiveItem("feed")}
          >
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Feed</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "chats" ? "active" : ""}`}
            onClick={() => handleActiveItem("chats")}
          >
            <ChatIcon className="sidebarIcon" onClick={handlechats} />
            <span className="sidebarLIstItemText" onClick={handlechats} >Chats</span>
          </li>
          <Link to={"/Home/videos"} className="link">
          <li
            className={`sidebarListItem ${activeItem === "videos" ? "active" : ""}`}
            onClick={() => handleActiveItem("videos")}
          >
            <OndemandVideoIcon className="sidebarIcon" />
             <span className="sidebarLIstItemText">Videos</span>
          </li></Link>
          <Link to={"/Home/Groups"} className="link">
          <li
            className={`sidebarListItem ${activeItem === "groups" ? "active" : ""}`}
            onClick={() => handleActiveItem("groups")}
          >
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Groups</span>
          </li></Link>
          <Link to={"/Bookmarks"} className="link">
          <li
            className={`sidebarListItem ${activeItem === "bookmarks" ? "active" : ""}`}
            onClick={() => handleActiveItem("bookmarks")}
          >
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Bookmarks</span>
          </li></Link>
          <Link to={"/Questions"} className="link">
          <li
            className={`sidebarListItem ${activeItem === "questions" ? "active" : ""}`}
            onClick={() => handleActiveItem("questions")}
          >
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Questions</span>
          </li></Link>
          <Link to={"/Home/jobs"} className="link">
          <li
            className={`sidebarListItem ${activeItem === "jobs" ? "active" : ""}`}
            onClick={() => handleActiveItem("jobs")}
          >
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">jobs</span>
          </li></Link>
          <Link to={"/Home/Events"} className="link">
          <li
            className={`sidebarListItem ${activeItem === "events" ? "active" : ""}`}
            onClick={() => handleActiveItem("events")}
          >
            <EventIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Events</span>
          </li></Link>
          <li
            className={`sidebarListItem ${activeItem === "courses" ? "active" : ""}`}
            onClick={() => 
              {handleActiveItem("courses")
              confirmLogout()}
            }
          >
            <LogoutIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">LogOut</span>
          </li>
        </ul>
        <button className="sidebarButton" onClick={handleShowMore}>
          {showAllFriends ? "Show Less" : "Show More"}
        </button>
        <hr className="sidebarHr" />
        <h3 className="closefreindsHeading">Close Friends</h3>
        <ul className="sidebarFriendList">
          {friends.map((val, ind) => {
            return <Closefriend key={ind} data={val} />;
          })}
        </ul>
        <button className="scrollTopBtn" onClick={() => window.scrollTo(0, 0)}>
          ↑ Top
        </button>
        <Chatapp 
        className={chatopen ? "open" : ""}
        chatUsers={chatUsers}
        onClose={handlechats} />


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
    </div>


// chat component



  );
}

export default Sidebar;
