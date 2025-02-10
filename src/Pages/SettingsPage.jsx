import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Avatar from "../assets/Avatar.png"
const SettingsPage =()=> {
  const [username, setUsername] = useState("Kelvin Agboje");
  const [email, setEmail] = useState("johndoe@email.com");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Main Content */}
      <div className="flex-1 md:ml-64 overflow-auto">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
export default SettingsPage