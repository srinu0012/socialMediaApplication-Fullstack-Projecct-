import "./home.css"

import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(){



    const [profileimage,setprofileimage]=useState("https://th.bing.com/th?id=OIP.0g9t2RRpr0rhAKaJPbQriQHaHk&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")
    const [searchname,setserachname]=useState("")
    const istoken=localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(()=>{
        if(!istoken) {navigate("/") }
        else{
            async function getHomeProfileImage(params) {
                let x= await axios.get(`https://myscocialmedia-node-js-mysql2.onrender.com/profileImages/${istoken}`)
                const {image_url}=x.data.find((val)=>val.image_type==="profile")
                if(image_url){
                    setprofileimage(image_url)
                }
               
            }
            getHomeProfileImage()
        }


    },[profileimage])

   
    
    return(<>
    <Topbar image_url={profileimage}  search={setserachname}/>
    <div className="homeContainer">
        <Sidebar />
        <Feed image_url={profileimage} search={searchname} />
        <Rightbar/>
    </div>
   
    </>)
}
export default Home;