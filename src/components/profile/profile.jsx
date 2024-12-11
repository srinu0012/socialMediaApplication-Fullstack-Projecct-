import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import ProfileFeed from "../profilepost/pofilepost";

import Rightbar from "../../components/rightbar/rightbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profileImage, setProfileImage] = useState(
    "https://static.vecteezy.com/system/resources/previews/026/265/992/original/add-profile-and-create-profile-icon-concept-vector.jpg"
  );
  const [coverImage, setCoverImage] = useState(
    "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
  );

  const [profileName, setProfileName] = useState("");
  const [profileDesc, setProfileDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing info
  const [newName, setNewName] = useState(""); // Temp state for editing name
  const [newDesc, setNewDesc] = useState(""); // Temp state for editing description

  const token = localStorage.getItem("token");

  useEffect(() => {
    getProfileInfo();
    getProfileImages();
  }, []);


// upload images

const handleImageUpload = async (e, type) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);
  formData.append("type", type);
  formData.append("token", token);

  try {
    const response = await fetch("https://myscocialmedia-node-js-mysql2.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    if (type === "profile") {
      setProfileImage(data.imageUrl);
    } else if (type === "cover") {
      setCoverImage(data.imageUrl);
    }
  } catch (error) {
    alert("Image upload failed. Please try again.");
  }
};

  // Fetch profile info (name and description)
  async function getProfileInfo() {
    try {
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/profileInfo/${token}`);
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
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/profileImages/${token}`);
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

  // Save updated profile info
  const saveProfileInfo = async () => {
    try {
      await axios.post("https://myscocialmedia-node-js-mysql2.onrender.com/updateProfileInfo", {
        token,
        name: newName,
        description: newDesc,
      });
      setProfileName(newName);
      setProfileDesc(newDesc);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile info:", error);
      alert("Failed to save info. Please try again.");
    }
  };

  return (
    <>
      <Topbar image_url={profileImage} />
      <div className="profile">
        <div className="sidebar" >
        <Sidebar />
        </div>
       
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              {/* Cover Image */}
              <label htmlFor="coverUpload">
                <img
                  className="profileCoverImg"
                  src={coverImage}
                  alt="Cover"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                id="coverUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleImageUpload(e, "cover")}
              />

              {/* Profile Image */}
              <label htmlFor="profileUpload">
                <img
                  className="profileUserImg"
                  src={profileImage}
                  alt="Profile"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                id="profileUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleImageUpload(e, "profile")}
              />
            </div>
            <div className="profileInfo">
              {isEditing ? (
                // Render input fields for editing
                <>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <textarea
                    placeholder="Enter description"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                  ></textarea>
                  <button onClick={saveProfileInfo}>Save</button>
                </>
              ) : (
                // Display profile info or "Add Info" symbol
                <>
                  {profileName || profileDesc ? (
                    <>
                      <h4 className="profileInfoName">{profileName}</h4>
                      <span className="profileInfoDesc">{profileDesc}</span>
                    </>
                  ) : (
                    <button onClick={() => setIsEditing(true)}>+ Add Info</button>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="profileRightBottom">
          <ProfileFeed image_url={profileImage}/>
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
