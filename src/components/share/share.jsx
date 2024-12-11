import { EmojiEmotions, Label, Room } from "@mui/icons-material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useState, useEffect } from "react";
import axios from "axios";
import "./share.css";

function Share({ image_url }) {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [feeling, setFeeling] = useState("");
  const [inputState, setInputState] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([1]); // For dropdown suggestions
  const [isLoading, setIsLoading] = useState(false); // Loading state for suggestions

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  
  const handleOpenInput = (type) => {
    setInputState(type);
    setInputValue("");
    setSuggestions([]);
  };

  const handleCancelInput = () => {
    setInputState(null);
    setInputValue("");
    setSuggestions([]);
  };

  const handleAddInput = (value = inputValue) => {
    if (value.trim() === "") return;
    if (inputState === "tag") {
      setTags((prevTags) => [...prevTags, value]);
    } else if (inputState === "location") {
      setLocation(value);
    } else if (inputState === "feeling") {
      setFeeling(value);
    }
    setInputState(null);
    setInputValue("");
    setSuggestions([]);
    
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    if (!description && !selectedFile) {
      alert("Please add a description or an image to share!");
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    formData.append("tags", JSON.stringify(tags));
    formData.append("location", location);
    formData.append("feeling", feeling);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("https://myscocialmedia-node-js-mysql2.onrender.com/addPost", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Post shared successfully!");
        setDescription("");
        setSelectedFile(null);
        setTags([]);
        setLocation("");
        setFeeling("");
        window.location.reload();
      } else {
        alert("Failed to share the post. Please try again.");
      }
    } catch (error) {
      console.error("Error sharing post:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const fetchSuggestions = async (query) => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/searchUsernames?query=${query}`);
      setSuggestions(response.data || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (inputState === "tag") {
      fetchSuggestions(value);
    }
  };

  return (
    <div className="share">
      <div className="shareWraper">
        <div className="shareTop">
          <img className="shareProfileImg" src={image_url} alt="Profile" />
          <input
            type="text"
            placeholder="Add your feed"
            className="shareInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="fileUpload" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </label>
            <div className="shareOption" onClick={() => handleOpenInput("tag")}>
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption" onClick={() => handleOpenInput("location")}>
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption" onClick={() => handleOpenInput("feeling")}>
              <EmojiEmotions htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton" onClick={handleSubmit}>
            Share
          </button>
        </div>
        {inputState && (
          <div className="shareInputBox">
            <input
              type="text"
              placeholder={`Enter ${inputState}`}
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={() => handleAddInput(inputValue)}>OK</button>
            <button onClick={handleCancelInput}>X</button>
            {inputState === "tag" && suggestions.length > 0 && (
              <ul className="suggestionsList">
                
                {isLoading ? (
                  <li>Loading...</li>
                ) : (
                  suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleAddInput(suggestion.value)}>
                      {suggestion.user_name}
                      
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        )}
        <div className="shareExtras">
          {tags.length > 0 && (
            <div className="shareTags">
              <strong>Tags:</strong>
              {tags.map((tag, index) => (
                <span key={index} className="tagItem">
                  {tag} <button onClick={() => handleRemoveTag(tag)}>x</button>
                </span>
              ))}
            </div>
          )}
          {location && (
            <div className="shareLocation">
              <strong>Location:</strong> {location}
            </div>
          )}
          {feeling && (
            <div className="shareFeeling">
              <strong>Feeling:</strong> {feeling}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Share;
