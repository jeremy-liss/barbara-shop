import React from 'react'

const App = (props)=> (
  <div>
    <h1>BARBARA SHOP QUARTET</h1>
    <div id="quartet">
      {props.images.map((image, i)=>{
        return (
          <div className='barb' key={i}>
            <img src ={image} />
          </div>
        )
      })}
    </div>
  </div>
)

export default App
