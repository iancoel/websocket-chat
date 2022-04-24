import React, {useState} from 'react'
import './styles.css'

import TextInput from '../TextInput'

export default function Join() {
  const [nickname, setNickname] = useState('');

  return (
    <>
      <h1>Join</h1>

      <TextInput />
    </>
  )
}
