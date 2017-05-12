import React from 'react'
import ReactDOM from 'react-dom'

import state from './state'
import App from './App'

const playSound = (i) => {
  state.soundOn[i] = true
  render()
}
const stopSound = (i) => {
  state.soundOn[i] = false
  render()
}

state.playSound = playSound
state.stopSound = stopSound

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render(state)
