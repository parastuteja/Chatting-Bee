import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Contacts from '../Components/Contacts';
import styled from "styled-components";
import { alluserRoutes } from '../utils/APIroutes';

export default function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser , setCurrentUser ] = useState([]);
  const [currentChat, setCurrentChat] = useState('');

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

  useEffect(() => {
    const checkAvatar = async () => {
      if (currentUser  && currentUser._id) {
        if (currentUser.isAvatarImageSet) {
          try {
            const { data } = await axios.get(`${alluserRoutes}/${currentUser._id}`);
            setContacts(data);
          } catch (error) {
            console.error("Error fetching contacts:", error);
          }
        } else {
          navigate('/setAvatar');
        }
      }
    };

    checkAvatar();
  }, [currentUser , navigate]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} changeChat={handleChatChange} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;