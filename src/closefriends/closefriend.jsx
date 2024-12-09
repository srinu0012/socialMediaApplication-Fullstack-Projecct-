import "./closefriend.css"

function Closefriend({data}){

    return(
        <li className="sidebarFriend">
                <img className="sidebarFriendImg" src={data.profile_image} alt="img" />
                <span className="sidebarFriendName">{data.user_name}</span>
        </li>  
    )
}

export default Closefriend;