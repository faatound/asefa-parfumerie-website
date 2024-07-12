import React from 'react'
import Mdstyle from'/styles/login.module.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Link from 'next/link';

 export default function Login() {
  return (
    <div className="flex h-screen">
    <div className="w-1/2 flex items-center justify-center">
      <img src='/1.png' alt='Asefa Parfumerie' className='' />
    </div>
    <div className="w-1/2 flex flex-col items-center justify-center">
      <span className={`${Mdstyle.nom} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}>
        AsefaParfumerie
      </span>
      <div className={Mdstyle.wrapper}>
        <form action=''>
          <h1>Login</h1>
          <div className={Mdstyle.inputBox}>
            <input type='text' placeholder="username" required />
            <FaUser className={Mdstyle.icon} />
          </div>
          <div className={Mdstyle.inputBox}>
            <input type='password' placeholder="password" required />
            <FaLock className={Mdstyle.icon} />
          </div>
          <div className={Mdstyle.rememberForgot}>
            <label> 
              <input type='checkbox' /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className={Mdstyle.registerLink}>
            <p>Don't have an account? 
              <Link href="/post/register"> Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

