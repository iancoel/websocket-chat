import React, {useState} from 'react'
import './styles.css'

export default function Join({nickname, setNickname, setRoomVisibility}) {
  const handleSubmit = () => {
    setRoomVisibility(true)
  }

  return (
    <>
      <h1>Join</h1>

      <form className='inputContainer namer'>
        <label htmlFor="nickname">Your name:</label>
        <input type="text" name="nickname" id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
        <button onClick={handleSubmit} type="submit">Login</button>
      </form>
    </>
  )
}
