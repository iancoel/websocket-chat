import React from 'react';
import './styles.css';

export default function Message({ content, sessionUserMessage }) {
  return (
    <span
      className={`message-container ${sessionUserMessage ? 'align-right' : ''}`}
    >
      <span>{content}</span>
    </span>
  );
}
