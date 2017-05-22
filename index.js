import React from 'react'
import ReactDOM from 'react-dom'

import state from './state'
import App from './App'

const playSound = (i) => {
  state.barbaras[i].singing = true
  render()
}
const stopSound = (i) => {
  state.barbaras[i].singing = false
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
