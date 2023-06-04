import React from 'react'

const CardProduct = (props) => {
  return (
    <div style={{
        height: 150,
        width: 150,
        backgroundColor: 'grey',
        borderRadius: 4,
        padding: 5,
        color: 'white',
        marginBottom: 5
    }}>
        <h2>{props.namaProduk}</h2>
        <p>{props.hargaProduk}</p>
    </div>
  )
}

export default CardProduct