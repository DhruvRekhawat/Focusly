import React from 'react'
import { useState } from 'react'
import { auth } from '../config/firebase-config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
const Auth = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const signIn = async () =>{
      await createUserWithEmailAndPassword(auth, email,password);
      
  }
  return (
    <>
      <input type="text" placeholder='Email...' onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <input type="text" placeholder='Password...' onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
           <button onClick={signIn}>Sign In </button>
           
    </>
  )
}

export default Auth