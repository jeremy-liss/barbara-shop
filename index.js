import React from 'react'
import ReactDOM from 'react-dom'

import state from './state'
import App from './App'

const playSound = () => {
  state.sound = !state.sound
  console.log('sound')
}

state.playSound = playSound

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render(state)
