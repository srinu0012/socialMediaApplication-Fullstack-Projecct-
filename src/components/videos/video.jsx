import React from "react";
import "./video.css";
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/sidebar";


function Videos() {
  const videoList = [
    { id: 1, title: "Video 1", url: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4" },
    { id: 2, title: "Video 2", url: "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" },
    { id: 3, title: "Video 3", url: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" },
    { id: 4, title: "Video 4", url: "https://videos.pexels.com/video-files/3129595/3129595-sd_640_360_30fps.mp4" },
    { id: 5, title: "Video 5", url: "https://videos.pexels.com/video-files/854106/854106-sd_640_360_25fps.mp4" },
    { id: 6, title: "Video 6", url: "https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4" },
    { id: 7, title: "Video 7", url: "https://videos.pexels.com/video-files/1409899/1409899-sd_640_360_25fps.mp4" }
  ];

  return (
    <>
    <Topbar></Topbar>
    <div className="videosbox">
    <Sidebar />
    <div className="videos">
    
      <h2>Videos</h2>
      <div className="videoContainer">
        {videoList.map((video) => (
          <div key={video.id} className="videoItem">
            <h3>{video.title}</h3>
            <video controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Videos;
