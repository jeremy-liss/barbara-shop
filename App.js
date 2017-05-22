import React from 'react'
import Sound from 'react-sound'

const App = (props)=> {

  return (
    <div>
      <h1>BARBARA SHOP QUARTET</h1>
      <div id="quartet">
        {props.barbaras.map((barbara, i)=>{
          return (
            <div className='barb' key={i} onMouseOver={()=>props.playSound(i)}>
              {barbara.singing ? <img src={barbara.open} /> : <img src={barbara.closed} />}
              {barbara.singing &&
                <Sound url={barbara.sound} playStatus={Sound.status.PLAYING} onFinishedPlaying={()=>props.stopSound(i)} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
