import React from 'react'
import Sound from 'react-sound'

const App = (props)=> {

  function getId(ev){
    props.playSound(ev.target.dataset.id)
  }

  return (
    <div>
      <h1>BARBARA SHOP QUARTET</h1>
      <div id="quartet">
        {props.images.map((image, i)=>{
          return (
            <div className='barb' key={i}>
              <img src ={image} data-id={i} onMouseOver={getId} />
              {props.soundOn[i] && <Sound url={props.sounds[i]} playStatus={Sound.status.PLAYING} onFinishedPlaying={()=>props.stopSound(i)}/>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
