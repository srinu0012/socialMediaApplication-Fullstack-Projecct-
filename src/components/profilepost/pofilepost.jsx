import { useState, useEffect } from "react";
import Post from "../posts/post";
import Share from "../share/share";
import "./profilepost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfileFeed({image_url}) {
  const [posts, setPosts] = useState([]);


  let navigate=useNavigate()

  const isToken=localStorage.getItem("token")



  // Fetch posts from the backend on component mount
  useEffect(() => {
    if(!isToken)navigate("/") 
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/Profileposts/${localStorage.getItem("token")}`); // Replace with your API URL
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleNewPost = async (newPost) => {
    try {
      const response = await axios.post("https://myscocialmedia-node-js-mysql2.onrender.com/posts", newPost); // Replace with your API URL
      setPosts((prevPosts) => [response.data, ...prevPosts]); // Add the new post to the top of the list
      console.log(response.data)
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  return (



    <div className="feed">
      <div className="feedWrapper" >
        {/* Share Component for adding a new post */}
        <Share image_url={image_url} onNewPost={handleNewPost} />

        {/* Render Posts */}
        {posts?.map((val,ind) => (
          <Post key={ind} post={val} />
        ))}
      </div>
    </div>
  );
}

export default ProfileFeed;
