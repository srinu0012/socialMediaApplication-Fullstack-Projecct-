import "./home.css"

import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home(){
    
    const istoken=localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
        if(!istoken) {navigate("/") }
    },[])
    
    return(<>
    <Topbar/>
    <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar/>
    </div>
   
    </>)
}
export default Home;