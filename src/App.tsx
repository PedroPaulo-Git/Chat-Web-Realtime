import React, { useEffect, useState } from 'react';
import Join from './components/join/join';
import Chat from './components/chat/chat';
import './App.css';

function App() {
  const [chatview,setChatview ] = useState<Boolean>(false);
  return (
   
    <div className="App">
      {
      chatview ? <Chat/> : <Join setChatview = {setChatview} />
    }
   
    </div>
  );
}

export default App;
