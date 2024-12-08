import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import loader from "../Assets/Loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/APIroutes";

const aContainer = styled.div`
  // Your styles here
`;

const bContainer = styled.div`
  // Your styles here
`;

export default function SetAvatar() {
  const api = `https://api.multiavatar.com/4645646`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    }
  }, [navigate]);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(user)
        );
        navigate("/");
      } else {
        toast.error("Error setting avatar. Please try again.", toastOptions);
      }
    }
  };

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = []; // Correctly initialize data as an array
      for (let i = 0; i < 4; i++) {
        try {
          const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, {
            responseType: 'arraybuffer' // Ensure you get the response as binary data
          });
          const base64String = btoa(String.fromCharCode(...new Uint8Array(response.data)));
          data.push(base64String);
        } catch (error) {
          console.error("Error fetching avatar:", error);
        }
      }
      setAvatars(data);
      setIsLoading(false);
    };

    fetchAvatars(); // Call the async function
  }, [api]); // Add api as a dependency if it can change

  return (
    <>
     {isLoading ? (
  <div className="loader-container">
    <img src={loader} alt="Loading..." className="loader" />
  </div>
) : (
  <div className="bContainer">
    <div className="title-container">
      <h1>Pick an Avatar as your profile picture</h1>
    </div>
    <div className="avatars">
      {avatars.map((avatar, index) => {
        return (
          <div
            className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
            key={index} // Add a key prop here
          >
            <img
              src={`data:image/svg+xml;base64,${avatar}`}
              alt="avatar"
              onClick={() => setSelectedAvatar(index)}
            />
          </div>
        );
      })}
    </div>
    <button onClick={setProfilePicture} className="submit-btn">
      Set as Profile Picture
    </button>
    <ToastContainer />
  </div>
)}

</>
  )}