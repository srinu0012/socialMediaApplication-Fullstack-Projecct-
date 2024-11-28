import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="profileimage" />
            <img className="profileUserImg" src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg" alt="userimage" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">srinu</h4>
                <span className="profileInfoDesc">nknknknknlnllknljnnk</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed />
          <Rightbar Profile />

          </div>
        </div>
        
      </div>
    </>
  );
}

export default Profile;
