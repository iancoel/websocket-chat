import { io } from "socket.io-client"; 

import { useState } from 'react';

import './App.css';

import Join from './Components/Join';
import Room from './Components/Room';

function App() {
  const socket = io("http://localhost:3001");

  const [roomVisibility, setRoomVisibility] = useState(false);
  const [nickname, setNickname] = useState('')

  return (
    <div className="App">
      {roomVisibility ? <Room socket={socket} nickname={nickname}/> : <Join nickname={nickname} setNickname={setNickname} setRoomVisibility={setRoomVisibility}/>}
    </div>
  );
}

export default App;
