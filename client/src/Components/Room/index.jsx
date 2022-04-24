import React, { useState, useEffect } from 'react'
import './styles.css'

import Message from '../Message'

export default function Room({socket, nickname}) {
  const [messageContent, setMessageContent] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('allMessages', (newAllMessages) => {
      setMessages(newAllMessages)
    })
  }, [socket])

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', { messageContent, nickname, id: socket.id });
    setMessageContent('');
  };


  return (
    <>
      <h1>This is the actual room screen</h1>

      <div className="chat-container">
        <div className="chat-body">
          <div className="messages">
            <div className="messages-list">
              {messages.map((message, index) => <Message key={index} content={message.messageContent} sessionUserMessage={message.id === socket.id} />)}
            </div>
          </div>
        </div>

        <form className='inputContainer namer'>
          <label htmlFor="messageContent"></label>
          <input type="text" name="messageContent" id="messageContent" value={messageContent} onChange={(e) => setMessageContent(e.target.value)}/>
          <button onClick={handleMessageSubmit} type="submit">Send</button>
        </form>
      </div>
    </>
  )
}
