import React, { useEffect } from 'react'
import useChat from './hooks/use-chat'
import './styles.css'

export default function ChatWindow({ participants, ipAddress, cssClass }) {
  const {
    messages,
    setMessages,
    newMessage,
    setNewMessage,
    handleNewMessageSubmit,
  } = useChat(participants, ipAddress)

  useEffect(() => {
    var list = document.getElementsByClassName('messages')[0]
    list.scrollTop = list.scrollHeight
  }, [messages])

  return (
    <div className={`${cssClass} chat container`}>
      <ul className="messages">
        {messages.map((message) => (
          <li key={message.id}>
            <span className="message sender">{message.from}</span>
            <span className="message body">{message.body}</span>
          </li>
        ))}
      </ul>
      <div className="input">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleNewMessageSubmit()
          }}
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}
