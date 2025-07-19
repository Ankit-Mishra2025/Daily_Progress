import React from 'react'
import { useContext } from 'react'
import UserContext from '../Utils/UserContext'




const CompoC = () => {


    const user=useContext(UserContext)
    // console.log(user);
    

  return (
    <div className='border border-b-2'>
      <h1>Component C</h1>
      <p>name:{user.email}</p>
    </div>
  )
}

export default CompoC
