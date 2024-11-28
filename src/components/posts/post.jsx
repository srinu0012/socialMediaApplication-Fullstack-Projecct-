import { MoreVert } from "@mui/icons-material";
import "./post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";


let user=[{
    id:1,
    userprofile:"data:image/jpeg;base64,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",
    username:"srinu"
},
{
    id:2,
    userprofile:"data:image/jpeg;base64,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",
    username:"jogendra"
},
{
    id:3,
    userprofile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxX4MGcxKfIuj1opw1fYCsJnWqfKgO7lYd_w&s",
    username:"saritha"
},
{
    id:4,
    userprofile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06X2n1C1IJQBirCCq4wZxbcLq4u8WvUEyTA&s",
    username:"asma"
},
]


function Post({post}){

    let userdetails=user.filter((val)=>val.id == post.userid)[0]
    const [like,setlike]=useState(post.like)
    const [islike,issetlike]=useState(false)
    return (<>
     <div className="post">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={userdetails.userprofile}  className="postProfileImage"/>
                <span className="postUserName">{userdetails.username}</span>
                <span className="postDate">{post.time}</span>
            </div>
            <div className="postTopRight">
            <MoreVert className="ProfileDots" />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span><hr className="postHr" />
            <img className="postImage" src={post.photo} alt="post" />
            
        </div>
        <div className="postBottom">
            <div className="postButtomLeft">
            <ThumbUpIcon htmlColor="green" className="likeIcon" onClick={()=>{
                setlike(islike?like-1:like+1)
                issetlike(!islike)
            }} />
            <FavoriteBorderIcon className="likeIcon" />
            <span className="postLikeCounter">{like} liked</span>
            </div>
            <div className="postButtomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
     </div>
    </>)
}

export default Post;