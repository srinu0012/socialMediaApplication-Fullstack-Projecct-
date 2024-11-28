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



let arr=["srinu","jogendra","siva","sari","asma"]

function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="sidebarWraper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">feed</span>
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <OndemandVideoIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BookmarksIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutlineIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">jobs</span>
            </li>
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon" />
              <span className="sidebarLIstItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Showmore</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
              {arr.map((val,ind)=>{
                return <Closefriend  key={ind} data={val}/>
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
