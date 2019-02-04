import {
  useState,
  useEffect,
  useContext
} from 'react'
import CableContext from '../../../features/app/cable-context'


export default function useChat(participants, ipAddress) {
  const {
    cable
  } = useContext(CableContext)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [channel, setChannel] = useState([])

  useEffect(() => {
    // load last 10 messages in case of a reload or browser crash
    fetch(`/chat_messages?participants=${participants}`)
      .then((resp) => resp.json())
      .then((json) => setMessages(json))

    setChannel(cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      received: function (data) {
        setMessages((messages) => ([...messages, JSON.parse(data)]))
      }
    }))
  }, [])

  function handleNewMessageSubmit() {
    channel.perform('chat', {
      to: participants.split(',')[1],
      from: participants.split(',')[0],
      body: newMessage,
      ipAddress
    })
    setNewMessage('')
  }

  return {
    messages,
    setMessages,
    newMessage,
    setNewMessage,
    handleNewMessageSubmit
  }
}
