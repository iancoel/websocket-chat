import React from 'react'
import './styles.css'

export default function Message({content}) {
  return (
    <span className="message-container">
      <span className="message">{content}</span>
    </span>
  )
}
