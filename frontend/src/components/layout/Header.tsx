import React, { useState } from "react";
export default function Header() {
    
     const [showNotifications, setShowNotifications] = useState(false);
   const [loading, setLoading] = useState(true);
     const [showModal, setShowModal] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const notifications = [
    {id:1 , read:true , message:'test test'},
    {id:2 , read:true , message:'test test'},
  ];
  
const handleClick = () => {
  setShowModal(prev => !prev);

};
    return(
         <div className="w-full z-10 h-30 bg-gray-50 fixed flex  justify-between items-center  px-4 py-5 space-x-4">
       <div className="">
          <img
            src="/Logo.png"
            alt="SmartKYC App"
            className=" object-contain"
            style={{height: "90px",}}
          />
        </div>
       <div className="flex items-center space-x-6">
        {/* notification  */}
         <div className="relative">
            <button 
        onClick={handleClick}
        className="relative p-1 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* Badge du nombre de messages */}
        {unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </div>
        )}
        
        {/* Icône de cloche */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-700" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
          />
        </svg>
      </button>
       {/* Modal */}
      {showModal && (
        <div className="absolute right-4 mt-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Notifications</h3>
          </div>

          <div className="max-h-96 overflow-y-auto p-2">
            {loading ? (
              [...Array(3)].map((_, index) => (
                <div key={index} className="p-3 border-b border-gray-100">
                  <div className="animate-pulse flex space-x-3">
                    <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : notifications.length > 0 ? (
              notifications.map(notification => (
                <div
                  key={notification?.id}
                  className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${
                    !notification?.read ? 'bg-blue-50' : ''
                  }`}
                >
                  <p className="text-sm text-gray-800">{notification?.message}</p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Aucune notification</p>
              </div>
            )}
          </div>
        </div>
      )}

      
        </div>

        {/* Photo de profil */}
        <div className="flex space-x-3 items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-black rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div className="flex space-x-1">
            <p className="font-semibold text-gray-800">Jean </p>
            <p className=" text-gray-500">Tagne</p>
          </div>
        </div>
       </div>
      </div>
    )
}