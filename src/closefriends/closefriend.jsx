import "./closefriend.css"

function Closefriend({data}){

    return(
        <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofOsczOcTet5ATRvcDwCjgi-PkZWGIdh-Ew&s" alt="img" />
                <span className="sidebarFriendName">{data}</span>
        </li>  
    )
}

export default Closefriend;