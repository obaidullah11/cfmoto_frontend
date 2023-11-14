import {React,useState }from "react";
import ThemeSwither from "./ThemeSwither";
import bell_icon from "../../images/bell_icon.svg";
import profile_pic from "../../images/profile_pic.png";
import hamburger_icon from "../../images/hamburger_icon.svg";
import logo from "../../images/logo.svg";

function Header(props) {
  const image_url = `https://api.cfmoto.world/${localStorage.getItem('profile_image')}`



  
    const [isOpen, setIsOpen] = useState(false);
  
    const handleLogout = () => {
      localStorage.removeItem("vinnData");
      localStorage.removeItem("token");
      window.location.reload();
    };
  return (
    <>
      <div className="bg-black-300 px-6 md:pl-[16.25rem] xl:pl-[21.125rem] md:pr-9 xl:pr-12 w-full h-[62px] md:h-[6.5625rem]  fixed top-0" style={{zIndex:1}}>
        <div className="relative h-full flex items-center justify-between  md:justify-end">
          {/* HAMBURGER ICON */}
          <button className="md:hidden" onClick={()=> props.setOpenSidebar(true)}>
            <img src={hamburger_icon} alt="hamburger-icon" />
          </button>

          {/* LOGO */}
          <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[119px]">
              <img src={logo} alt="logo" />
            </div>
          </div>

          {/* THEME SWITCHER */}
          {/* { <div className="hidden md:block">
            <div className="mr-[34px] flex items-center">
              <ThemeSwither />
            </div>
          </div> } */}

          {/* NOTIFICATIONS */}
          <div className="mr-10 hidden md:block">
            <img src={bell_icon} alt="bell-icon" />
          </div>

          {/* PROFILE */}
          <div className="relative">
      <div
        className="md:pl-9 md:border-l md:border-offWhite flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-7 h-7 md:w-11 md:h-11 rounded-full mr-3">
          <img
            className="w-full h-full rounded-full object-cover"
            src={image_url}
            alt="user-profile-pic"
          />
        </div>
        <span className="text-f_12_l_15 xl:text-f_16_l_20">
          {localStorage.getItem("profile")}
        </span>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-main border border-gray-200 rounded shadow">
          <button
            className="block px-4 py-2 text-sm bg-gradient-text  w-full text-left"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
          {/* <div className="md:pl-9 md:border-l md:border-offWhite flex items-center" onClick={
            ()=>{
              localStorage.removeItem("vinnData");
              localStorage.removeItem("token");
              window.location.reload();
          }}>
            <div className="w-7 h-7 md:w-11 md:h-11 rounded-full mr-3">
              <img
                className="w-full h-full rounded-full object-cover"
                src={image_url}
                alt="user-profile-pic"
              />
            </div>
            <span className="text-f_12_l_15 xl:text-f_16_l_20">{localStorage.getItem('profile')}</span>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
