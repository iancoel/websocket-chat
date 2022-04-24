import React, {useState} from 'react'
import './styles.css'

export default function TextInput ({join}) {
  const [content, setContent] = useState('')

  return (
    <div className='inputContainer namer'>
      <label htmlFor="content">{join ? 'Your name:' : ''}</label>
      <input type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={e => console.log(content)}>{join ? 'Login' : 'Send'}</button>
    </div>
  )
}
