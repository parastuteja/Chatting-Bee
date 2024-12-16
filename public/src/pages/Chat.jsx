import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import navigate from 'navigate';

import { useNavigate } from 'react-router-dom';

import { alluserRoutes, host } from '../utils/APIroutes';
import Contacts from '../Components/Contacts';
export default function Chat() {
  const socket=useRef()
  const navigate=useNavigate()
  const [contacts,setContacts]=useState([])
  const[currentUser,setCurrentUser]=useState([])
  useEffect(() => {
    const checkUser  = async () => {
      const userData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
      if (!userData) {
        navigate("/login");
      } else {
        setCurrentUser (JSON.parse(userData));
      }
    };
  
    checkUser ();
  }, [navigate]);
  useEffect(()=>{
 const checkAvatar= async()=>{
  if(currentUser.isAvatarImageSet){
    const data=await axios.get(`${alluserRoutes}/${currentUser._id}`)
    setContacts(data.data)

  }
  else{
    navigate('/setAvatar')
  }
 }    
  })
 
  return (
    <div className="h-screen flex bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Contacts List */}
      <div className="w-1/4 bg-purple-50 shadow-md border-r border-gray-300 overflow-y-auto">
        <div className="p-4 border-b border-gray-300 bg-purple-600 text-white">
          <h2 className="text-lg font-bold">Contacts</h2>
        </div>
       <Contacts contacts={contacts} currentUser={contacts}/>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 flex flex-col bg-indigo-50">
        <div className="p-4 border-b border-gray-300 bg-indigo-700 text-white">
          <h2 className="text-lg font-bold">Chat with Alice</h2>
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-white">
          {/* Messages */}
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-indigo-500 text-white p-3 rounded-lg max-w-xs shadow-md">
                Hi there!
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-purple-200 text-purple-700 p-3 rounded-lg max-w-xs shadow-md">
                Hello! How are you?
              </div>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="p-4 border-t border-gray-300 bg-indigo-200 flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
          <button className="ml-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 shadow-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}


