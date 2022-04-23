import { useState } from 'react';

import './App.css';

import Join from './Components/Join';
import Room from './Components/Room';

function App() {
  const [roomVisibility, setRoomVisibility] = useState(true);

  return (
    <div className="App">
      {roomVisibility ? <Room /> : <Join />}
    </div>
  );
}

export default App;
