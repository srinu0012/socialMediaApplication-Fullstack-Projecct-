
import "./online.css"


function Online({data}){

    return(  <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img className='rightbarProfileImg' 
            src="https://tse1.mm.bing.net/th?id=OIP.O21O10UUMdtcI_BsMbZQ_wHaHv&pid=Api&P=0&h=220"
             alt="" />
            <span className='rightbarOnline'>

            </span>
        </div>
        <span className='rightbarUsername'>{data}</span>
    </li>)
}

export default Online;