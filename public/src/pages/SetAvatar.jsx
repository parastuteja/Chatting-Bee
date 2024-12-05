import React, { useEffect, useState } from 'react'
import loader from'../Assets/Loader.gif'
import { setAvatarRoute } from '../utils/APIroutes'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
export default function SetAvatar() {
  const api='https://multiavatar.com/45678945'
  const navigate=useNavigate();
  const [avatars, setAvatars] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const setProfilePicture=async()=>{

  }
  useEffect( async()=>{
    const data=[]
    for(let i=0;i<4;i++){
      const image=await axios.get(`${api}/${Math.round(Math.random()*1000)}`)
    const buffer=new Buffer(image.data)
    data.push(buffer)
  }},[])
  return (
    <>
    <aContainer>
      <div className="title-container">
        <h1>Pick An Avatar For Your Profile Picture</h1>
      </div>
      <div className="avatars">

      </div>
       Set Your Avatar
    </aContainer>
    <ToastContainer/>
    </>
  )
}

