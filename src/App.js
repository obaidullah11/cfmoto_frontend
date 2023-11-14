// import logo from './logo.svg';
// import './App.css';
import { Route, Routes,BrowserRouter,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import VehicleData from "./Pages/VehicleData";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import VINcode from "./Pages/Vincode";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Protected from "./protected";
import LoginProtected from "./loginProtect";
import AddNewService from "./Pages/AddNewService";
import maintainence from "./Pages/maintainence";
import Waranty from "./Pages/waranty";
import Settings from "./Pages/Settings";
import Repairing from "./Pages/repairing";
import Test from "./components/Common/pdfviewer";
import Sidebar from "./components/Common/Sidebar.jsx";
import Header from "./components/Common/Header.jsx";
function App() {
  // const [navigate,setNavigate] = useState("a")
  // const location=useLocation()

  // useEffect(()=>{
  //   setNavigate(location.pathname)
  //   console.log(navigate)
  // // },[location])
  // const [openSidebar, setOpenSidebar] = useState(false); 
  return (
    <>
    <div className="App"style={{ backgroundColor: "#0a0a0a" }}>
    <ToastContainer />
    
    {/* {navigate==="a" &&<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} activeMe="dashboard"/>}
    <div>
    <Header setOpenSidebar={setOpenSidebar} />
    </div> */}
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" exact element={<LoginProtected Children={Login} isLoggedIn={localStorage.getItem("token")==null}/>}  />
        <Route path="/dashboard" exact element={<Protected Children={Dashboard} isLoggedIn={localStorage.getItem("token")!=null}/>} />
        <Route path="/vin" exact element={<Protected Children={VINcode} isLoggedIn={localStorage.getItem("token")!=null} />} />
        <Route path="/vehicleData" exact element={<Protected Children={VehicleData} isLoggedIn={localStorage.getItem("token")!=null}/>}  />
        <Route path="/settings" exact element={<Protected Children={Settings} isLoggedIn={localStorage.getItem("token")!=null}/>}  />
        <Route path="/service/addNewService" exact element={<Protected Children={AddNewService} isLoggedIn={localStorage.getItem("token")!=null}/>}  />
        <Route path="/service/maintainence" exact element={<Protected Children={maintainence} isLoggedIn={localStorage.getItem("token")!=null}/>}  />
        <Route path="/service/Waranty" exact element={<Protected Children={Waranty} isLoggedIn={localStorage.getItem("token")!=null}/>}  />
        <Route path="/service/repairings" exact element={<Protected Children={Repairing} isLoggedIn={localStorage.getItem("token")!=null}/>}  />
        {/* <Route path="/servicemanual/pdfviewer" exact element={<Protected Children={Test} isLoggedIn={localStorage.getItem("token")!=null}/>}  /> */}
        {/* <Route path="/service/addNewService" element={<AddNewService/>} /> */}
      </Routes>
      {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
