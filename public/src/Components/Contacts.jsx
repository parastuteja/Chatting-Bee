import React, { useEffect, useState } from 'react';
import logo from'../Assets/logo.png'
const Contacts = ({ contacts, currentUser  }) => {
    // Ye useEffect kuch nahi kar raha hai, isliye isse hata sakte hain
    // useEffect(() => {}, [currentUser ]);

   
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

    
    useEffect(() => {
        if (currentUser ) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser ]);
  const changeCurrentChat=(index,contacts)=>{
    setCurrentUserSelected(index);
    changeCurrentChat(contacts)
  }
    return (
        <>
        {currentUserImage&&currentUserImage&&(
           <div className=' container'>
            <div className='brand'>src={logo}</div>
            <h1>Chatting-Bee</h1>
            <div className='Contacts'>
                {contacts.map((contacts,index)=>{
                    return(
                        <div key={contactsssName='contact' onClick={()=>changeCurrentChat(index,contacts)}
                    )
                })}
            </div>
           </div>
        )}
        </>
    );

};
export default Contacts;
