import { AiOutlineMenu } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Logo from "./assets/Logo.png";
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center mb-6 bg-white shadow-md p-5 sticky top-0 z-40">
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)} 
        className="md:hidden p-2 bg-blue-500 text-white rounded-md"
      >
        <AiOutlineMenu className="text-xl" />
      </button>
      <img src={Logo} alt="Logo" />
      <div className="flex items-center space-x-4">
        <IoMdNotificationsOutline className="text-xl" />
        <FaUserCircle className="text-xl" />
        <span>Kelvin</span>
      </div>
    </div>
  );
};

export default Header;
