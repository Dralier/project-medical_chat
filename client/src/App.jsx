import './App.css';
import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer, ChannelContainer, Auth }from './components';
const cookies = new cookies();

const apiKey = 'p849y623vr2g';
const client = StreamChat.getInstance(apiKey)
const authToken = cookies.get("token");

if(authToken) {
  client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),        
  }, authToken)
}


const App = () => {

  if(!authToken) return <Auth />

  return (
    <div className="app__wrapper">
     <Chat client={client} theme="team light">
       <ChannelListContainer />
       <ChannelContainer />
     </Chat>
    </div>
  );
}

export default App;
