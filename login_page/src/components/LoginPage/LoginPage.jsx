import React from 'react'
import { Form } from './Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
const LoginPage = () => {
  return (
    <main className='login-page-container'>
         <div className="form-container">
            <div className="contact-logo"><FontAwesomeIcon icon={faUser} /></div>
            <Form/>
            <a href="/">create new account</a>
        </div>
    </main>
  )
}

export default LoginPage