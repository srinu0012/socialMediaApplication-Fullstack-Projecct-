import { useState } from "react";
import { lazy,Suspense } from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";


const Login=lazy(()=>import("./components/login/login"))
const Profile=lazy(()=>import("./components/profile/profile"))
const Home=lazy(()=>import("./pages/home/home"))
const  FriendsProfile =lazy(()=>import("./components/friendProfile/friendProfile"))
const UnderConstruction=lazy(()=>import("./components/underWorking/underworking"))
const Videos=lazy(()=>import("./components/videos/video"))
const Events=lazy(()=>import("./components/Events/Events"))
const Groups=lazy(()=>import("./components/groups/gropus"))
const Jobs=lazy(()=>import("./components/jobs/jobs"))








function App(){
  
const[islogin,setislogin]=useState(false)

  return(

    
    <>
      <BrowserRouter>
     
         <Routes>
        <Route path="/" element={<Suspense fallback="loadind...."><Login/></Suspense>}></Route>
        <Route path="/Home" element={<Suspense fallback="loadind...."><Home/></Suspense>}></Route>
        <Route path="/Home/profile" element={<Suspense fallback="loadind...."><Profile/></Suspense>}></Route>
        <Route path="/friends/:id" element={<Suspense fallback="loadind...."><FriendsProfile /></Suspense>} />
        <Route path="/Home/videos" element={<Suspense fallback="loadind...."><Videos/></Suspense>}/>
        <Route path="*" element={<Suspense fallback="loadind...."><UnderConstruction/></Suspense>}></Route>
        <Route path="/Home/Events" element={<Suspense fallback="loadind...."><Events/></Suspense>}></Route>
        <Route path="/Home/Groups" element={<Suspense fallback="loadind...."><Groups/></Suspense>}></Route>
        <Route path="/Home/Jobs" element={<Suspense fallback="loadind...."><Jobs/></Suspense>}></Route>
        
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App;
