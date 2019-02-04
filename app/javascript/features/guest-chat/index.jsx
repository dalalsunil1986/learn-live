import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import ChatWindow from '../../components/chat-window'

export default function GuestChat({}) {
  const [ipAddress, setIpAddress] = useState('')
  useEffect(() => {
    const ip = document.getElementById('ipAddress').value
    const cookies = new Cookies()
    cookies.set('ipAddress', ip, {
      path: '/',
    })
    setIpAddress(ip)
  }, [])

  return (
    <ChatWindow
      participants={`guest,reactu`}
      ipAddress={ipAddress}
      cssClass={`guest-chat`}
    />
  )
}
