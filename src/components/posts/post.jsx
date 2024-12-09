import { useState, useEffect } from "react";
import axios from "axios";
import { MoreVert } from "@mui/icons-material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"; // Filled thumbs up
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined"; // Outlined thumbs up
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isThumbUp, setIsThumbUp] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [feeling, setFeeling] = useState(post.feeling || ""); // Default feeling can be empty or based on the post
  const [location, setLocation] = useState(post.location || ""); // Default location can be empty or based on the post
  // Fetch comments for the post
  useEffect(() => {
    if (showComments) {
      axios
        .get(`http://localhost:3300/comments/${post.post_id}`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((err) => console.error("Failed to fetch comments", err));
    }
  }, [showComments, post.post_id]);

  // Handle like button click
  function handleLike() {
    setIsLiked(!isLiked);
    setLike(isLiked ? like - 1 : like + 1);
    axios.post(`http://localhost:3300/setlike/${post.post_id}?type=${isLiked ? "sub" : "add"}`);
  }

  // Handle thumbs-up button click
  function handleThumbUp() {
    setIsThumbUp(!isThumbUp);
    setLike(isThumbUp ? like - 1 : like + 1);
    axios.post(`http://localhost:3300/setlike/${post.post_id}?type=${isThumbUp ? "sub" : "add"}`);
  }

  // Add a new comment
  function handleAddComment(e) {
    e.preventDefault();
    if (!newComment.trim()) return;

    axios
      .post(`http://localhost:3300/comments/${post.post_id}`, {
        token: localStorage.getItem("token"), // Replace with the logged-in user's name
        text: newComment,
      })
      .then((response) => {
        // Update comments array with the new comment
        setComments((prev) => [...prev, { user_name: "current-user", text: newComment }]);
        setNewComment(""); // Clear the comment input field
      })
      .catch((err) => console.error("Failed to add comment", err));
  }

  // Update feeling status
  function handleFeelingChange(e) {
    setFeeling(e.target.value); // Update the feeling state
  }

  return (
    <div className="post">
      <div className="postWrapper">
        {/* Post Top */}
        <div className="postTop">
          <div className="postTopLeft">
          <Link to={`/friends/${post.user_id}`}>
            <img src={post.profile_image_url} className="postProfileImage" alt="profile" />
            </Link>
            <span className="postUserName">{post.user_name}</span>
            <span className="postDate">{post.time}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="ProfileDots" />
          </div>
        </div>

        {/* Post Center */}
        <div className="postCenter">
          <span className="postText">{post.post_text}</span>

          {/* Display Tags */}
          {post.tags && (
            <div className="postTags">
              {post.tags.map((tag, index) => (
                <span key={index} className="postTag">#{tag}</span>
              ))}
            </div>
          )}

          {/* Display Feeling */}
          {feeling && (
            <div className="postFeelings">
              <span>Feeling: {feeling}</span>
            </div>
          )}

          {/* Display Location */}
          {location && (
            <div className="postLocation">
              <span>Location: {location}</span>
            </div>
          )}

          <hr className="postHr" />
          <img className="postImage" src={post.post_image_url} alt="post" />
        </div>

        {/* Post Bottom */}
        <div className="postBottom">
          <div className="postBottomLeft">
            {isThumbUp ? (
              <ThumbUpAltIcon className="likeIcon thumb filled" onClick={handleThumbUp} />
            ) : (
              <ThumbUpAltOutlinedIcon className="likeIcon thumb" onClick={handleThumbUp} />
            )}

            {isLiked ? (
              <FavoriteIcon className="likeIcon heart filled" onClick={handleLike} />
            ) : (
              <FavoriteBorderIcon className="likeIcon heart" onClick={handleLike} />
            )}
            <span className="postLikeCounter">{like} liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={() => setShowComments(!showComments)}>
              {post.comments} comments
            </span>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="postComments">
            <form onSubmit={handleAddComment} className="commentForm">
              <input
                type="text"
                value={newComment}
                placeholder="Write a comment..."
                className="commentInput"
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit" className="commentButton">
                Post
              </button>
            </form>
            <div className="commentsList">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <strong>{comment.user_name}</strong>: {comment.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
