import React from 'react'
import Sound from 'react-sound'


const App = (props)=> {

  const triggerSound = ()=> {
    props.playSound()
  }

  return (
    <div>
      <h1>BARBARA SHOP QUARTET</h1>
      <div id="quartet">
        {props.images.map((image, i)=>{
          return (
            <div className='barb' key={i}>
              <img src ={image} onMouseOver={triggerSound}/>
              {props.sound && <Sound url={props.sounds[i]} playStatus={Sound.status.PLAYING} />}
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default App
