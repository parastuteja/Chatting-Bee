import React from "react";
import logo from '../Assets/logo.png'
const Contacts = ({contacts,currentUser}) => {
  return (
    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-100 bg-white border-b border-gray-200">
      {/* Avatar */}
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src="https://via.placeholder.com/150" // Replace with actual avatar URL
          alt="User Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Contact Details */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          {/* Name */}
          <p className="text-sm font-medium text-gray-800">John Doe</p>
          {/* Unread Message Count */}
          
        </div>

        {/* Last Message */}
        <p className="text-xs text-gray-500 truncate">Hey! How are you doing?</p>
      </div>
    </div>
  );
};

export default Contacts;
