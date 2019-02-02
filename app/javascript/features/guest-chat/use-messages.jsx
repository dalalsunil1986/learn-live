import { useState, useEffect } from 'react'

export default function useMessages({ displayName }) {
  const [messages, setMesages] = useState({
    messages: [],
    displayName,
  })

  useEffect(() => {
    // load last 10 messages in case of a reload or browser crash
  }, [])

  return [messages, setMesages]
}
