import React from 'react'
import useMessages from './use-messages'

import './styles.css'

export default function GuestChat({ displayName }) {
  const [messages, setMessages] = useMessages

  return (
    <div className='chat container'>
      <div className='messages'>
        {messages.map((message) => (
          <li key={message.id}>
            <span className='message sender'>{message.sender}</span>
            <span>{message.text}</span>
          </li>
        ))}
      </div>
    </div>
  )
}
