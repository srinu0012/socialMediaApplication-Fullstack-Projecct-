import { useState } from "react";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import Home from "./pages/home/home"
import { BrowserRouter,  Route, Routes } from "react-router-dom";



function App(){
  
const[islogin,setislogin]=useState(false)

  return(

    
    <>
      <BrowserRouter>
     
         <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App;