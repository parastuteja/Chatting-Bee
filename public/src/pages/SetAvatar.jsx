import React, { useState } from 'react'
import { SetAvatarRoute } from '../utils/APIroutes'
import { useNavigate } from 'react-router-dom'
import Loader from'../Assets/Loader.gif'
import { ToastContainer } from 'react-toastify'
export default function SetAvatar(){
  const api='https://api.multiavatar.com/456789'
  const navigate=useNavigate()
const [avatars,setAvatars]=useState([])
const[setloading,setisLoading]=useState(true)
const[selectedAvatar,setSelectedAvatar]=useState(undefined)
const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
const setProfilePicture=async()=>{
  
}
  return( <>    
  <aComponent>
    <div className="title-container">
      <h1>
        pick an avatar as ur profile picture
      </h1>
      <div className="avatars">
        {

        }
      </div>
    </div>
    </aComponent>
    <ToastContainer/>
    </>

  )
}