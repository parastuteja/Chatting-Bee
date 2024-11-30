import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../Assets/Loader.gif'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{setAvatarRoute}from'../utils/APIroutes'
import { useNavigate } from "react-router-dom";
const api='https://api.multiavatar.com/456789'
const navigate= useNavigate()
export default function SetAvatar() {
  return (
    <aContainer>
      SetAvatar
    </aContainer>
  
  )
}

