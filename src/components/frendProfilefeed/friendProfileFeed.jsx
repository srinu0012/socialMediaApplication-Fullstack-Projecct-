import { useState, useEffect } from "react";
import Post from "../posts/post";
import Share from "../share/share";
import "./friendprofilefeed.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function FriendProfileFeed() {

   let {id}= useParams(null)
  const [posts, setPosts] = useState([]);

  // Fetch posts from the backend on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3300/FriendProfileposts/${id}`); // Replace with your API URL
      setPosts(response.data);

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleNewPost = async (newPost) => {
    try {
      const response = await axios.post("http://localhost:3300/posts", newPost); // Replace with your API URL
      setPosts((prevPosts) => [response.data, ...prevPosts]); // Add the new post to the top of the list
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  return (
    <div className="feed">
      <div className="feedWrapper" >
        {posts?.map((val,ind) => (
          <Post key={ind} post={val} />
        ))}
      </div>
    </div>
  );
}

export default FriendProfileFeed;
