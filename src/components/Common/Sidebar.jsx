import React, { useState, useEffect, useMemo } from "react";
import logo from "../../images/logo.svg";
import dashboard_icon from "../../images/dashboard_icon.svg";
import dashboard_icon_active from "../../images/dashboard_icon_white.svg";
import service_icon from "../../images/service_icon.svg";
import service_icon_active from "../../images/service_icon_white.svg";
import order_icon from "../../images/order_icon.svg";
import bulletins_icon from "../../images/bulletins_icon.svg";
import Modal from 'react-modal';
import warranty_icon from "../../images/warranty_icon.svg";
import help_icon from "../../images/help_icon.svg";
import vehicle_icon from "../../images/vehicle_icon.svg";
import settings_icon from "../../images/settings_icon.svg";
import users_icon from "../../images/users_icon.svg";
import email_icon from "../../images/email_icon.svg";
import backup_icon from "../../images/backup_icon.svg";
import { Link, useLocation,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [activeVehiclelink, setActiveVehiclelink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
const handleVehicleLinkClick = (link) => {
  setActiveVehiclelink(link.toString())
}

// const isVehicleActive = activeVehiclelink === link.id ? "text-gray-200" : "text-gray-600"
  // LINKS TOP
  const linksTop = [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: dashboard_icon,
      activeIcon: dashboard_icon_active,
      goToLink: "/dashboard",
    },
    // {
    //   id: "service",
    //   text: "Service",
    //   icon: service_icon,
    //   activeIcon: service_icon_active,
    // },
    // {
    //   id: "order",
    //   text: "Order",
    //   icon: order_icon,
    //   activeIcon: order_icon,
    // },
    // {
    //   id: "bulletins",
    //   text: "Bulletins",
    //   icon: bulletins_icon,
    //   activeIcon: bulletins_icon,
    // },
    // // {
    // //   id: "warranty",
    // //   text: "Warranty",
    // //   icon: warranty_icon,
    // //   activeIcon: warranty_icon,
    // // },
    // {
    //   id: "help",
    //   text: "Help",
    //   icon: help_icon,
    //   activeIcon: help_icon,
    // },
    {
      id: "vehicle",
      text: "Vehicle",
      icon: vehicle_icon,
      activeIcon: vehicle_icon,
      goToLink: localStorage.getItem("vinnData")?"/vehicleData":"/vin",
    },
  ];

  const vehicleMenu= [
    {
      id: "maintainence",
      text: "Maintainence",
      goToLink: "/service/addNewService",
    },
    {
      id: "repairing",
      text: "Repairing",
      goToLink: "/service/maintainence",
    },
    {
      id: "parts",
      text: "Parts",
      goToLink: "https://cfmoto.motohobi.ee/product/2022-motorcycle-cf800-5eu5",
    },
    {
      id: "Accessories",
      
      text: "Accessories",
      goToLink: "https://cfmoto.motohobi.ee/product/2022-accessory-cf800-5eu5",
    },
    {
      id: "servicemanual",
      text: "Service manual",
      goToLink: "https://drive.google.com/file/d/16ShLrViH0V2ggHjso_ym_yWY6lJWTssu/view",
    },
    {
      id: "usermanual",
      text: "User Manual",
      goToLink: "https://drive.google.com/file/d/1nLsQHMeheszp8UTU2I35BFT9vGhnOWC_/view",
    },
    {
      id: "warranty",
      text: "Warranty",
      goToLink: "/service/Waranty",
    },
    {
      id: "Logout",
      text: "Logout",
      goToLink: "service/logout",
    }
  ]

  // LINKS BOTTOM
  // const linksBottom = [
  //   {
  //     id: "settings",
  //     text: "Settings",
  //     icon: settings_icon,
  //     activeIcon: settings_icon,
  //     goToLink: "/settings",
  //   },
  //   {
  //     id: "users",
  //     text: "Users",
  //     icon: users_icon,
  //     activeIcon: users_icon,
  //   },
  //   {
  //     id: "email",
  //     text: "Email",
  //     icon: email_icon,
  //     activeIcon: email_icon,
  //   },
  //   {
  //     id: "backup",
  //     text: "Backup",
  //     icon: backup_icon,
  //     activeIcon: backup_icon,
  //   },
  // ];
  const handleVehicleLinkClick2 = (link) => {
    if (link.startsWith("http")) {
      // If the link starts with "http" or "https", open it in a new window
      window.open(link, "_blank");
    } else {
      // Otherwise, navigate to the link within the same application
      window.location.href = link;
    }
  };
  
  // SET ACTIVE STATE ACCORDING TO URL
  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(
      currentPath === "/dashboard"
        ? "dashboard"
        : currentPath === "/settings"
        ? "settings"
        : currentPath === "/vehicleData"|| "/service/maintainence"
        ? "vehicle"
        : ""
    );
    setActiveVehiclelink(
      currentPath === "/service/addNewService"
        ? "maintainence"
        : currentPath === "/service/maintainence"
        ? "reparing"
        : currentPath === "/service/parts"
        ? "https://cfmoto.motohobi.ee/product/2022-motorcycle-cf800-5eu5"
        : currentPath=== "service/usermanual"? "usermanual"
        : currentPath=== "service/logout"? "logout"
        : currentPath=== "service/servicemanual"? "servicemanual"
        : currentPath=== "service/Waranty"? "warranty" : null
    );
    // console.log(location.pathname)
     activeVehiclelink==="warranty"? console.log(true): console.log(false)
  }, [location, activeVehiclelink]);

  return (
    <>
      <div
        className={
             `w-[85%] md:w-[16.25rem] xl:w-[21.125rem] bg-black-200 fixed top-0 left-0 bottom-0 flex flex-col justify-between overflow-y-auto sidebar z-10 ${props.openSidebar? "translate-x-0": "-translate-x-full"} md:translate-x-0 transition`
        }
      >
        {/* TOP PORTION */}
        <div>
          {/* LOGO */}
          <div className="pt-[73px]">
            <img className="mx-auto" src={logo} alt="logo" />
          </div>

          {/* LINKS */}
          <ul className="pt-[92px] px-[18px] md:px-3 xl:px-[18px] space-y-5">
            {linksTop.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.goToLink}
                  className={`w-full flex items-center justify-start pl-11 md:pl-4 xl:pl-12 py-2.5 rounded-[10px] ${
                    activeLink === link.id
                      ? "bg-gradient text-white"
                      : "text-lightWhite"
                  }`}
                  href="#abc"
                  onClick={() => handleLinkClick(link.id)}
                >
                  <span className="w-[26px] mr-8 md:mr-3 xl:mr-[30px]">
                    <img
                      src={activeLink === link.id ? link.activeIcon : link.icon}
                      alt="icon"
                    />
                  </span>
                  <span className="text-f_22_l_28">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ID */}
          {
            localStorage.getItem("vinnData") &&(
            <div style={{cursor:"pointer"}} className="mt-[30px] flex items-center justify-center" onClick={() => navigate("/vehicleData")}>
              <span className="text-f_24_l_30">{JSON.parse(localStorage.getItem("vinnData"))?.data?.vin_code}</span>
            </div>
            )
          }

          {/* Vehicle Menu */}
          {
            activeLink==="vehicle" &&<div className="text-f_24_l_30 flex flex-col  mb-10">
            { vehicleMenu.map((link,index) => (
              
                index==vehicleMenu.length-1? (
                  <>
                  <NavLink key={link.id} 
                  onClick={
                    ()=>{
                      setShowModal2(true)
                    }
                  } 
                  className={({isActive})=> {
                    return(`mt-7 xl:pl-28 md:pl-14 ${isActive? "text-white  opacity-50" : "text-white opacity-50"}`)
                    }}>{link.text}</NavLink>
                  </>
                ):(
                  <>

                  <NavLink key={link.id} 
                  
                  onClick={() => handleVehicleLinkClick2(link.goToLink)}
                  // to={link.goToLink} 
                  className={({isActive})=> {
                    return(`mt-7 xl:pl-28 md:pl-14 ${isActive? "text-white" : "text-white opacity-50"}`)
                    }}>{link.text}</NavLink>
                  </>
                )
              
  
            )) }
            </div>
          }
          <Modal
              isOpen={showModal2}
              onRequestClose={() => setShowModal2(false)}
              className="fixed  inset-0 flex items-center justify-center z-50"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
              <div className="bg-gradient rounded-lg p-6">
                <h1 className="text-xl font-bold mb-4">Confirmation</h1>
                <p className=" mb-6 text-black">
                Are you sure you want to remove the vehicle?
                </p>
            
                <div className="flex justify-end mt-6">
                  <button
                    className="px-4 py-2  text-white rounded hover:bg-blue-700 mr-2"
                    tyle={{ backgroundColor: "#009bb4" }}
                    onClick={()=>{
                      
                      localStorage.removeItem("vinnData");
                      setShowModal(false);
                      navigate("/dashboard");
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="px-4 py-2 bg-white text-white rounded hover:bg-gray-500"
                    s
                    onClick={()=>{
                      setShowModal2(false)
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
            

{/* <Modal
  isOpen={showModal}
  onRequestClose={() => setShowModal(false)}
  className="fixed inset-0 flex items-center justify-center z-50"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50"
>
  <div className="bg-black-500 rounded-lg p-6">
    <h1 className="text-xl font-bold mb-4">Confirmation</h1>
    <p className="bg-gradient-text mb-6">Are you sure you want to remove the vehicle?</p>
    <div className="flex justify-end">
      <button
        className="px-4 py-2  text-white rounded hover:bg-blue-600 mr-2"
        onClick={() => {
          localStorage.removeItem("vinnData");
          setShowModal(false);
          navigate("/dashboard");
        }}
      >
        Confirm
      </button>
      <button
        className="px-4 py-2  text-white rounded hover:bg-gray-400"
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>
    </div>
  </div>
</Modal> */}
        </div>

              {/* BOTTOM PORTION */}
            
      </div>

      

      {/* MOBILE CLOSE SIDEBAR OVERLAY */}
      <div
        className={props.openSidebar ? "md:hidden fixed inset-0" : "md:hidden"}
        onClick={() => props.setOpenSidebar(false)}
      ></div>
    </>
  );
}

export default Sidebar;
