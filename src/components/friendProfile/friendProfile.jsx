import "./friendProfile.css";
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/sidebar";
import ProfileFeed from "../profilepost/pofilepost";
import Rightbar from "../rightbar/rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FriendProfileFeed from "../frendProfilefeed/friendProfileFeed";




function FriendsProfile() {
  const [profileImage, setProfileImage] = useState(
    "https://static.vecteezy.com/system/resources/previews/026/265/992/original/add-profile-and-create-profile-icon-concept-vector.jpg"
  );
  const [coverImage, setCoverImage] = useState(
    "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
  );
const {id}=useParams()

  const [profileName, setProfileName] = useState("");
  const [profileDesc, setProfileDesc] = useState("");
  const [isFollowing, setIsFollowing] = useState(false); // Track follow status

  const token = localStorage.getItem("token");

  useEffect(() => {
    if(!token) {navigate("/") }
    getProfileInfo();
    getProfileImages();
    checkIfFollowing(); // Check if the current user is following the friend
  }, []);

  // Fetch profile info (name and description)
  async function getProfileInfo() {
    try {
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/friendProfileInfo/${id}`);
      const { user_name, description } = response.data[0];
      setProfileName(user_name || "");
      setProfileDesc(description || "");
    } catch (error) {
      console.error("Error fetching profile info:", error);
    }
  }

  // Fetch profile images
  async function getProfileImages() {
    try {
  
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/friendProfileImages/${id}`);
      response.data.forEach((val) => {
        if (val.image_type === "cover") {
          setCoverImage(val.image_url);
        } else if (val.image_type === "profile") {
          setProfileImage(val.image_url);
        }
      });
    } catch (error) {
      console.error("Error fetching profile images:", error);
    }
  }

  // Check if the current user is following this friend
  async function checkIfFollowing() {
    try {
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/isFollowing?token=${token}&id=${id}`);
   
      setIsFollowing(response.data); // Assuming server returns { isFollowing: true/false }
    } catch (error) {
      console.error("Error checking follow status:", error);
    }
  }

  // Follow or unfollow the friend
  const toggleFollow = async () => {
    try {
      const action = isFollowing ? "unfollow" : "follow";
      const response = await axios.post(`https://myscocialmedia-node-js-mysql2.onrender.com/${action}Friend`, {
        token,
        Id: id, // Assuming profileId is profileName for now
      });
      setIsFollowing(!isFollowing); // Toggle follow status
    } catch (error) {
      console.error("Error updating follow status:", error);
    }
  };

  return (
    <>
      <Topbar image_url={profileImage} />
      <div className="profile">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              {/* Display Cover Image */}
              <img className="profileCoverImg" src={coverImage} alt="Cover" />
              {/* Display Profile Image */}
              <img className="profileUserImg" src={profileImage} alt="Profile" />
            </div>
            <div className="profileInfo">
              {/* Display Friend’s Name and Description */}
              <h4 className="profileInfoName">{profileName}</h4>
              <span className="profileInfoDesc">{profileDesc}</span>
            </div>
            {/* Follow/Unfollow Button */}
            <button onClick={toggleFollow} className="followButton">
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div className="profileRightBottom">
            <FriendProfileFeed image_url={profileImage} />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendsProfile;
