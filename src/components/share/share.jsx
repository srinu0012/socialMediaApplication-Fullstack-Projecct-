import { EmojiEmotions, Label, Room } from "@mui/icons-material";
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';

function Share() {
  return (
    <>
      <div className="share">
        <div className="shareWraper">
            <div className="shareTop">
                <img className="shareProfileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXjnwOAh3suTZVRaDGaXLtG5EzVhbOGEw8g&s" alt="image" />
                <input type="text" placeholder="add your feed" className="shareInput" />
            
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue"  className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="gold" className="shareIcon" />
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Share;
