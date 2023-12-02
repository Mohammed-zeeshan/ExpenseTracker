import React, { useRef } from 'react'
import classes from './Signup.module.css'

const ForgotPassword = () => {
    const emailInputRef = useRef();
    const submitHandler = (event) => {
        const email = emailInputRef.current.value;
        event.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0',{
            method: 'POST',
            body: JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email: email,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div>
        <section>
            <form onClick={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='email'>Enter the email whcih you have registered.</label>
                <input type='email' id='email' ref={emailInputRef} required  />
            </div>
            <button>Send Link</button>
            </form>
        </section>
    </div>
  )
}

export default ForgotPassword
