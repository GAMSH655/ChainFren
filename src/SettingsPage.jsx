import { useState } from "react";
import { FaUserCircle , FaPen } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiOutlineHome, HiOutlineChartBar } from "react-icons/hi";
import { MdOutlineStream, MdMonetizationOn } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "./assets/Avatar.png"
import Logo from "./assets/Logo.png"
import { NavLink } from "react-router-dom";
export default function SettingsPage() {
  const [username, setUsername] = useState("Kelvin Agboje");
  const [email, setEmail] = useState("johndoe@email.com");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const sideBarData=[
    {Link : "#" , name:"home" , LinkIcon:<HiOutlineHome/>},
    {Link : "#" , name:"Stream" , LinkIcon:<MdOutlineStream/>},
    {Link : "#" , name:"Setting" , LinkIcon:<FiSettings/>},
    {Link : "#" , name:"customize channel" , LinkIcon:<FaPen/>},
    {Link : "#" , name:"Monetization" , LinkIcon:  <MdMonetizationOn/>},
]

  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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
              <span>{name}</span>
            </NavLink>
          ))
        }
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 md:ml-64 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-md p-[20px] sticky top-0 z-40">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 bg-blue-500 text-white rounded-md">
            <AiOutlineMenu className="text-xl" />
          </button>
          <img src={Logo} alt="" />
          <div className="flex items-center space-x-4">
            <IoMdNotificationsOutline className="text-xl" />
            <FaUserCircle className="text-xl" />
            <span>Kelvin</span>
          </div>
        </div>
        
        {/* Profile Section */}
        <div className="p-[20px]">
          <h3 className="text-lg font-bold mb-4">Profile</h3>
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img src={Avatar} alt="" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Change Avatar</button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={username}
                readOnly
                className="border px-4 py-2 w-1/2 rounded-md bg-gray-100"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
            </div>
          </div>
        </div>
        
        {/* Security Section */}
        <div className="p-[20px]">
          <h3 className="text-lg font-bold mb-4">Security</h3>
          <div className="bg-[#DFE0E1] shadow rounded-lg mt-6">
            <div className="mb-4 ">
              <label className="block p-[20px] text-yellow font-bold mb-1">Password</label>
              <div className="bg-white p-[20px] flex items-center space-x-2">
                <input
                  type="password"
                  value="********"
                  readOnly
                  className="border px-4 py-2 w-1/2 rounded-md bg-gray-100"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Change</button>
              </div>
            </div>
          </div>
          <div className="bg-[#DFE0E1] shadow rounded-lg mt-6">
            <div className="mb-4 ">
              <label className="block p-[20px] text-yellow font-bold mb-1">Password</label>
              <div className="bg-white p-[20px] flex items-center space-x-2">
                <input
                  type="password"
                  value="********"
                  readOnly
                  className="border px-4 py-2 w-1/2 rounded-md bg-gray-100"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
