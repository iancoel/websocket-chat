import React, {useState} from 'react'
import './styles.css'


export default function Join() {
  const [nickname, setNickname] = useState('');

  return (
    <>
      <h1>Join</h1>

      <div className='inputContainer'>
        <label htmlFor="nickname">Your name:</label>
        <input type="text" name="nickname" id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
        <button onClick={e => console.log(nickname)}>Login</button>
      </div>
    </>
  )
}
