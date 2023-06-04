import React from 'react'
// import './Tombol.css'

const isClickButton = true;
const styleTombol = {
    backgroundColor: 'green',
    padding: 2,
    borderRadius: 3,
    border: 'none'
}

const Tombol = (props) => {
  return (
    <button className='btn-primary' style={styleTombol}>{props.children}</button>
  )
}

export default Tombol