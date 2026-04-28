import React from 'react'
import Mdstyle from'/styles/login.module.css'
import Link from 'next/link';

export default function login() {
  return (
    <div className={Mdstyle.container}>
      <div className={Mdstyle.left}>
      <img src='/1.png' alt='Asefa Parfumerie' className='' />
        <h1>Bienvenue chez ASEFA</h1>
        <p>Connectez-vous pour accéder à votre univers parfumé.</p>
      </div>
      <div className={Mdstyle.right}>
        <form action=''>
            <h2>Login</h2>
            <div className={Mdstyle.inputbox}>
            <input type='text' placeholder="username" required />
            </div>
            <div className={Mdstyle.inputbox}>
            <input type='password' placeholder="password" required />
            </div>
            <div className={Mdstyle.remember}>
              <label>
              <input type='checkbox' /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type='submit' className={Mdstyle.btn}>Login</button>
            <div className={Mdstyle.register}>
            <p>Don&apos;t have an account? 
              <Link href="/post/register">Register</Link>
            </p>
            </div>
        </form>
      </div>
    </div>
  )
}
