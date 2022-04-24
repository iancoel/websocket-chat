import React from 'react'
import './styles.css'

import Message from '../Message'
import TextInput from '../TextInput'

export default function Room() {
  const messages = ['mensagem 1', 'teste', 'outro teste']

  return (
    <>
      <h1>This is the actual room screen</h1>

      <div className="chat-container">
        <div className="chat-body">
          <div className="messages">
            <div className="messages-list">
              {messages.map(message => <Message content={message} />)}
            </div>
          </div>
        </div>

        <TextInput/>
      </div>
    </>
  )
}
