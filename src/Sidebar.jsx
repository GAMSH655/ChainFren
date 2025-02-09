import React from 'react'
import { FaSackDollar ,FaPen } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { HiOutlineHome, HiOutlineChartBar } from "react-icons/hi";
import { MdOutlineStream} from "react-icons/md";
import { NavLink } from "react-router-dom";
const Sidebar = ({sidebarOpen , setSidebarOpen}) => {
  const sideBarData=[
    { Link: "/", name:"Home", LinkIcon: <HiOutlineHome /> },
    { Link: "/stream", name: "Stream", LinkIcon: <MdOutlineStream /> },
    { Link: "/customize", name: "Customize Channel", LinkIcon: <FaPen /> },
    { Link: "/analytics", name: "Analytics", LinkIcon: <SiSimpleanalytics /> },
    { Link: "/monetization", name: "Monetization", LinkIcon: <FaSackDollar /> },
    { Link: "/settings", name: "setting", LinkIcon: <FiSettings /> },
]
  return (
    <div>
          <div className={`fixed top-0 left-0 bg-white shadow-lg p-5 z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:translate-x-0 md:w-64 h-full md:fixed` }>
                <h2 className="text-lg font-bold mb-4">CREATOR DASHBOARD</h2>
                <ul className="space-y-4">
                  {
                  sideBarData.map(({ Link, LinkIcon, name }, index) => (
                    <NavLink 
                      to={Link} 
                      key={index} 
                      className={({ isActive }) => 
                        `flex items-center space-x-2 p-2 rounded-md transition-colors duration-300 
                        ${isActive ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white"}`
                      }
                    >
                      {LinkIcon}
                      <span className="capitalize text-xl">{name}</span>
                    </NavLink>
                  ))
                }
                </ul>
              </div>
    </div>
  )
}

export default Sidebar