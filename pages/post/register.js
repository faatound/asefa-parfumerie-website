import React from 'react'
import Mdstyle from'/styles/login.module.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

 export default function Login() {
  return (
    <div>
         <span className={`${Mdstyle.nom} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}>AsefaParfumerie</span>
      <div className={Mdstyle.wrapper}>
      <form action=''>
      <h1>Register</h1>
      <div className={Mdstyle.inputBox}>
        <input type='text' placeholder="username" required></input>
        <FaUser className={Mdstyle.icon} />
      </div>
      <div className={Mdstyle.inputBox}>
        <input type='email' placeholder="email" required></input>
        <MdEmail className={Mdstyle.icon} />
      </div>
      <div className={Mdstyle.inputBox}>
        <input type='password' placeholder="password" required></input>
        <FaLock className={Mdstyle.icon} />
      </div>

      <div className={Mdstyle.rememberForgot}>
        <label className='mr-2'> <input type='checkbox'/>I read and accept all the conditions  </label>
        
        <a href="#">Privacy Term</a>
      </div>

      <button type="submit">Register</button>
      
      </form>
    </div>
    </div>
  )
}

