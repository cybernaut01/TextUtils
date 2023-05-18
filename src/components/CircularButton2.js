import React,{useState} from 'react'

export default function CircularButton2(props) {

  const enableMode = () => {
    document.body.style.backgroundColor = props.color
  }
  return (
    <>
        <button className = "btn btn-primary mx-3" style = {{borderRadius:'50%',height:'30px',width:'30px',backgroundColor:props.color,border:'none'} }  onClick ={enableMode}>
        </button>
    </>
  )
}
