import { useState } from "react";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import Home from "./pages/home/home"
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import FriendsProfile from "./components/friendProfile/friendProfile";


function App(){
  
const[islogin,setislogin]=useState(false)

  return(

    
    <>
      <BrowserRouter>
     
         <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Home/profile" element={<Profile/>}></Route>
        <Route path="/friends/:id" element={<FriendsProfile />} />
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App;
