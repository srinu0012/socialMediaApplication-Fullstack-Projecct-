import Online from "../online/online";
import "./rightbar.css";

let arr = [
  "srinu",
  "siva",
  "jogendra",
  "asma",
  "saritha",
  "sd",
  "sdff",
  "ghr",
  "gefgeg",
  "egrgerg",
];

function Rightbar() {
  const HomeRightbar = () => {
    return (
      <>
        
        <img
          className="rightbarad"
          src="https://media4.giphy.com/media/KM6xQQwDihoF7ox4d9/giphy.webp?cid=790b7611qx2b4mrg58tyo7z4ebkpux751ec7z7fosy8stx6p&ep=v1_gifs_search&rid=giphy.webp&ct=g"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {arr.map((val, ind) => {
            return <Online key={ind} data={val} />;
          })}
        </ul>
      </>
    );
  };


  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <HomeRightbar />
      </div>
    </div>
  );
}

export default Rightbar;
