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
import SchoolIcon from "@mui/icons-material/School";
import Closefriend from "../../closefriends/closefriend";
import axios from "axios";

let arr = ["srinu", "jogendra", "siva", "sari", "asma", "john", "doe", "jane", "kate"];

function Sidebar() {
  const [showAllFriends, setShowAllFriends] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // To track the active sidebar item

  const [friends,setfriends]=useState([])

  const handleShowMore = () => setShowAllFriends(!showAllFriends);

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  useEffect(()=>{
    getclosefriends()
  },[])


  async function getclosefriends(){
   let token=localStorage.getItem("token")

    let response=await axios.get(`http://localhost:3300/getFriendsDetails/${token}`)
   
    setfriends(response.data)
  }
  return (
    <div className="sideBar">
      <div className="sidebarWraper">
        <ul className="sidebarList">
          <li
            className={`sidebarListItem ${activeItem === "feed" ? "active" : ""}`}
            onClick={() => handleActiveItem("feed")}
          >
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">feed</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "chats" ? "active" : ""}`}
            onClick={() => handleActiveItem("chats")}
          >
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Chats</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "videos" ? "active" : ""}`}
            onClick={() => handleActiveItem("videos")}
          >
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Videos</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "groups" ? "active" : ""}`}
            onClick={() => handleActiveItem("groups")}
          >
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Groups</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "bookmarks" ? "active" : ""}`}
            onClick={() => handleActiveItem("bookmarks")}
          >
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Bookmarks</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "questions" ? "active" : ""}`}
            onClick={() => handleActiveItem("questions")}
          >
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Questions</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "jobs" ? "active" : ""}`}
            onClick={() => handleActiveItem("jobs")}
          >
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">jobs</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "events" ? "active" : ""}`}
            onClick={() => handleActiveItem("events")}
          >
            <EventIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Events</span>
          </li>
          <li
            className={`sidebarListItem ${activeItem === "courses" ? "active" : ""}`}
            onClick={() => handleActiveItem("courses")}
          >
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarLIstItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton" onClick={handleShowMore}>
          {showAllFriends ? "Show Less" : "Show More"}
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {friends.map((val, ind) => {
            return <Closefriend key={ind} data={val} />;
          })}
        </ul>
        <button className="scrollTopBtn" onClick={() => window.scrollTo(0, 0)}>
          ↑ Top
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
