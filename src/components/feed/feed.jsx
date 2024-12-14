import { useState, useEffect } from "react";
import Post from "../posts/post";
import Share from "../share/share";
import "./feed.css";
import axios from "axios";
import { red } from "@mui/material/colors";

function Feed({ image_url,search }) {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetchPosts()
  },[])

  useEffect( ()=>{

    if(!search){
      fetchPosts()
    }else{
      if(posts.length>0){
        var filterdata=posts.filter((val)=>{
      
          return val.post_text?.includes(search)
          
       })
       setPosts(filterdata)
      }
     
        
      
      
    }
   
  },[search])

 



  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://myscocialmedia-node-js-mysql2.onrender.com/posts"); // Replace with your API URL
       
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleNewPost = async (newPost) => {
    try {
      const response = await axios.post("https://myscocialmedia-node-js-mysql2.onrender.com/posts", newPost); // Replace with your API URL
      setPosts((prevPosts) => [response.data, ...prevPosts]); // Add the new post to the top of the list
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  return (
    <div className="feed" >
      <div className="feedWrapper">

        
        {/* Share Component for adding a new post */}
        <Share image_url={image_url} onNewPost={handleNewPost} key={555} setPosts={setPosts}/>
       
        {/* Render Posts */}
        { posts.map((val,ind) => (
          <Post key={ind} post={val}  />
        ))}

      
      </div>
    </div>
  );
}

export default Feed;
