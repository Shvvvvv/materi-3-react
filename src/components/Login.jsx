import React from 'react'
import KotakTeks from './KotakTeks'
import Tombol from './Tombol'

const Login = () => {
  return (
    <form action="">
        <label htmlFor="email">Email</label>
        <KotakTeks place='Email'/>
        <label htmlFor="password" >Password</label>
        <KotakTeks place='Password'/>
        <Tombol>Masuk Data</Tombol>
    </form>
  )
}

export default Login