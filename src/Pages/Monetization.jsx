import React from 'react'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
const Monetization = () => {
     const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 md:ml-64 overflow-auto">
         <Header/>
         <div className=" flex flex-wrap md:grid md:grid-cols-2 md:gap-1 md:p-[10px]">
          <div className="bg-white shadow-lg p-6 rounded-lg w-full ">
          <div className="bg-black text-white p-4 rounded-lg">
           <div className="">
           <div className=' flex justify-between items-center p-[10px]'>
             <p className="text-2xl">Wallet Balance</p>
             <button className="text-gray-400 text-sm">History</button> 
           </div>
           <p className="text-[2rem] p-[10px] font-bold">$10,000.00</p>
           </div>
         </div>
         <button className="capitalize w-full mt-[15px] p-[8px] bg-blue-500 rounded-md text-white"> withdraw</button>
          </div>
          <div className=" grid  grid-cols-2 gap-2 p-[10px]">
          
            <div className=" col-span-1 border-2 border-[#DFE0E1] rounded-lg">
              <h3 className="font-bold text-xl  p-[10px]">Revenue</h3>
              <p className="text-2xl font-bold p-[10px]">$2,193.00</p>
            </div>
           
            <div className=" col-span-1 border-2 border-[#DFE0E1] rounded-lg ">
              <h3 className="font-bold text-xl  p-[10px]">Subscribers</h3>
              <p className="text-2xl font-bold p-[10px]">1,234</p>
            </div>
           
            <div className="  col-span-1 border-2 border-[#DFE0E1] rounded-lg ">
              <h3 className="font-bold text-xl  p-[10px]">store orders</h3>
              <p className="text-2xl font-bold p-[10px]">100</p>
            </div>
           
          </div>
          
         </div>
      </div>
    </div>
  )
}

export default Monetization






// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="p-6 flex flex-col md:flex-row gap-6">
//       {/* Wallet Balance & Withdraw Section */}
//       <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-1/3">
//         <div className="bg-black text-white p-4 rounded-lg flex justify-between items-center">
//           <div>
//             <p className="text-sm">Wallet Balance</p>
//             <p className="text-2xl font-bold">$10,000.00</p>
//           </div>
//           <button className="text-gray-400 text-sm">History</button>
//         </div>
        
//         <div className="mt-4">
//           <label className="text-sm font-semibold">Choose payment method</label>
//           <input
//             type="number"
//             placeholder="$"
//             className="w-full p-2 mt-2 border rounded-md focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Wallet Address"
//             className="w-full p-2 mt-2 border rounded-md focus:outline-none"
//           />
//           <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold">
//             Withdraw
//           </button>
//         </div>
        
//         <p className="text-center mt-2 text-sm">Or use</p>
//         <div className="flex justify-around mt-2">
//           <button className="p-2 bg-gray-100 rounded-md">Stripe</button>
//           <button className="p-2 bg-gray-100 rounded-md">Li-Fi</button>
//           <button className="p-2 bg-gray-100 rounded-md">Ramp</button>
//           <button className="p-2 bg-gray-100 rounded-md">Transak</button>
//         </div>
        
//         <p className="text-xs text-gray-500 mt-4">
//           ⚠️ Funds may be irrecoverable if you enter an incorrect wallet address. Ensure the accuracy of the provided wallet address to avoid any loss.
//         </p>
//       </div>

//       {/* Metrics Section */}
//       <div className="flex flex-wrap gap-4 md:flex-1">
//         <div className="bg-white shadow-lg p-6 rounded-lg w-48">
//           <p className="text-gray-500">Revenue</p>
//           <p className="text-xl font-bold">$2,193.00</p>
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg w-48">
//           <p className="text-gray-500">Subscribers</p>
//           <p className="text-xl font-bold">1,234</p>
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg w-48">
//           <p className="text-gray-500">Store Orders</p>
//           <p className="text-xl font-bold">100</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
