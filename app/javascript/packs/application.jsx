import React from 'react'
import ReactDOM from 'react-dom'
import ActionCable from 'actioncable-modules'

import App from '../features/app'

const meta = Array.from(document.getElementsByTagName('meta')).find((el) => {
  return el.getAttribute('name') === 'action-cable-url'
})
let cable = ActionCable.createConsumer(meta.getAttribute('content'))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App cable={cable} />,
    document.body.appendChild(document.createElement('div')),
  )
})
