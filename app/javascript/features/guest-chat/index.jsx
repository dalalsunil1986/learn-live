import React, { useEffect } from 'react'
import useGuestChat from './hooks/use-guest-chat'
import './styles.css'

export default function GuestChat({ participants }) {
  const {
    messages,
    setMessages,
    newMessage,
    setNewMessage,
    handleNewMessageSubmit,
  } = useGuestChat(participants)

  useEffect(() => {
    var list = document.getElementsByClassName('messages')[0]
    list.scrollTop = list.scrollHeight
  }, [messages])

  return (
    <div className="chat container">
      <ul className="messages">
        {messages.map((message) => (
          <li key={message.id}>
            <span className="message sender">{message.from}</span>
            <span className="message body">{message.body}</span>
          </li>
        ))}
      </ul>
      <div className="input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleNewMessageSubmit}>Send</button>
      </div>
    </div>
  )
}
