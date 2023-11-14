import React, { useState } from "react";
import dashboard_icon from "../../images/dashboard_icon.svg";
import dashboard_icon_active from "../../images/dashboard_icon_white.svg";
import service_icon from "../../images/service_icon.svg";
import service_icon_active from "../../images/service_icon_white.svg";
import { Link } from "react-router-dom";

function Random() {
  const [activeLink, setActiveLink] = useState("dashboard");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // LINKS TOP
  const linksTop = [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: dashboard_icon,
      activeIcon: dashboard_icon_active,
      goToLink: "/dashboard",
    },
    {
      id: "service",
      text: "Service",
      icon: service_icon,
      activeIcon: service_icon_active,
    },
  ];
  return (
    <div>
      {" "}
      {/* LINKS */}
      <ul>
        {linksTop.map((link) => (
          <li key={link.id}>
            <Link
              to={link.goToLink}
              className={`w-full ${
                activeLink === link.id
                  ? "bg-gradient text-white"
                  : "text-lightWhite"
              }`}
              href="#abc"
              onClick={() => handleLinkClick(link.id)}
            >
              <span>
                <img
                  src={activeLink === link.id ? link.activeIcon : link.icon}
                  alt="icon"
                />
              </span>
              <span>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Random;
