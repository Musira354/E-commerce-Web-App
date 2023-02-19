import React from 'react'



const ColorBox = (props) => {
  return (
    <div class="colorBoxGroup">
      <div class="colorBox" >
        <div class="color black" onClick={()=> props.setColor('red')}  ></div>
      </div>
      <div class="colorBox">
        <div class="color brown" onClick={()=> console.log('brown')} ></div>
      </div>
      <div class="colorBox">
        <div class="color beige" onClick={()=> console.log('beige')}  ></div>
      </div>
      <div class="colorBox">
        <div class="color grey" onClick={()=> console.log('grey')} ></div>
      </div>
      <div class="colorBox">
        <div class="color white" onClick={()=> console.log('white')}></div>
      </div>
      <div class="colorBox">
        <div class="color blue"  onClick={()=> console.log('blue')}></div>
      </div>
    </div>
  )
}

export default ColorBox
