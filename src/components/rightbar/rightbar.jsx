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

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="" alt="" />
          <span className="birthdayText">
            <b> pola foster</b>and<b>3 other friends</b> have a birthday today
          </span>
        </div>
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

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rigtbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City</span>
            <span className="rightbarInfoValue">Hyderabad</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From</span>
            <span className="rightbarInfoValue">Nellore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?rs=1&pid=ImgDetMain" />
            <span className="rightbarFollowingName">Jogendra</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?rs=1&pid=ImgDetMain" />
            <span className="rightbarFollowingName">Jogendra</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?rs=1&pid=ImgDetMain" />
            <span className="rightbarFollowingName">Jogendra</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?rs=1&pid=ImgDetMain" />
            <span className="rightbarFollowingName">Jogendra</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?rs=1&pid=ImgDetMain" />
            <span className="rightbarFollowingName">Jogendra</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?rs=1&pid=ImgDetMain" />
            <span className="rightbarFollowingName">Jogendra</span>
          </div>
          
        </div>
        <img
          className="rightbaradPofile"
          src="https://media4.giphy.com/media/KM6xQQwDihoF7ox4d9/giphy.webp?cid=790b7611qx2b4mrg58tyo7z4ebkpux751ec7z7fosy8stx6p&ep=v1_gifs_search&rid=giphy.webp&ct=g"
        />
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile?<ProfileRightbar/>:<HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
