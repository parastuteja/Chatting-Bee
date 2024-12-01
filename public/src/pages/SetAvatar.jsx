import React, { useEffect, useState } from 'react'
import { SetAvatarRoute } from '../utils/APIroutes'
import { useNavigate } from 'react-router-dom'
import Loader from'../Assets/Loader.gif'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import { base } from '../../../server/model/userModel'
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
const setProfilePicture=async()=>{}
useEffect(()=>{
const data=[]
for(let i=0;i<4;i++){
const image=  await axios.get (`${api}/${Math.round(Math.random() * 1000)}`);
const buffer=new Buffer(image.data)
data.push(buffer.toString('base64'))
}
setAvatars(data)
setisLoading(false)
},[])
  return( <>    
  <aComponent>
    <div className="title-container">
      <h1>
        pick an avatar as ur profile picture
      </h1>
      <div className="avatars">
        {
avatars.map((avatars,index)=>{
  return(`avatar ${selectedAvatar ===index?"selected":''}`)
}) }
      </div>
      <img src={}/>
    </div>
    </aComponent>
    <ToastContainer/>
    </>

  )
}