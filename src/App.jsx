import React from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const isLogged = true;
  return (
    <div style={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Header/>
      //Condition Rendering
    { isLogged ? <Dashboard/> : <Login/>}
    </div>
  )
}

export default App