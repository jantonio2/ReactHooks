import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext);

  const newUser = {
    id: 12345,
    name: 'Antonio',
    email: 'antonio@gmail.com'
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick= {() => setUser(newUser)}
      >
        Login
      </button>
    </div>
  )
}
