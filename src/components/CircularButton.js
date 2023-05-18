import React, {useState} from 'react'

export default function CircularButton(props) {
  const [currState, upState] = useState(null)

  const setState = (navColor, backColor) => {
    upState({
      navColor: navColor,
      backColor: backColor
    })
  }

  const funButton = (color) => {
    if(color === 'red')  {
      console.log(color)
      // setState('#E64848','#C21010')
    }
    else if(color === 'blue') {
      console.log(color)
      // setState('','')
    }
    else if(color === 'green') {
      console.log(color)
      // setState('','')
    }
    else if(color === 'maroon') {
      console.log(color)
      // setState('','')
    }
  }
  return (
    <div>
      <button
        className="btn btn-primary mx-3"
        style=
        {{ backgroundColor: 'red', borderRadius: '50%', height: '30px', width: '30px', border: 'none' }}
        onClick = {funButton('red')}
      ></button>
      <button
        className="btn btn-primary mx-3"
        style=
        {{ backgroundColor: 'blue', borderRadius: '50%', height: '30px', width: '30px', border: 'none' }}
        onClick = {funButton('blue')}
      ></button>
      <button
        className="btn btn-primary mx-3"
        style=
        {{ backgroundColor: 'green', borderRadius: '50%', height: '30px', width: '30px', border: 'none' }}
        onClick = {funButton('green')}
      ></button>
      <button
        className="btn btn-primary mx-3"
        style=
        {{ backgroundColor: 'maroon', borderRadius: '50%', height: '30px', width: '30px', border: 'none' }}
        onClick = {funButton('maroon')}
      ></button>
    </div>
  )
}
