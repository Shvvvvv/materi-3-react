import React from 'react'
import CardProduct from './CardProduct'

const Dashboard = () => {
    const listProduk = [
        {
            namaProduk: 'Sepatu',
            hargaProduk: 'Rp. 120.000'
        },
        {
            namaProduk: 'Celana',
            hargaProduk: 'Rp. 100.000'
        },
        {
            namaProduk: 'Sendal',
            hargaProduk: 'Rp. 20.000'
        },
        {
            namaProduk: 'Baju',
            hargaProduk: 'Rp. 150.000'
        },
        {
            namaProduk: 'Jaket',
            hargaProduk: 'Rp. 220.000'
        },
        {
            namaProduk: 'Sweater',
            hargaProduk: 'Rp. 180.000'
        },
    ]
  return (
    <div>
        {
            //List Rendering
            listProduk.map((value, index) => {
                return <CardProduct key={index} namaProduk={value.namaProduk} hargaProduk={value.hargaProduk}/>
            })
        }
    </div>
  )
}

export default Dashboard