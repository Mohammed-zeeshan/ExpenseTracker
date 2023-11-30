import React, { useContext, useRef } from 'react'
import classes from './Signup.module.css';
import AuthContext from '../pages/auth-context';


const Signup = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const Authctx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;
        if (enteredPassword === enteredConfirmPassword) {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0',{
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then(() => {
                        let errorMessage = 'Authentication failed';
                        throw new Error(errorMessage);
                    })
                }
            }).then(data => {
                Authctx.login(data.idToken);
              }).catch((err) => {
                alert(err.message);
              })
        }
        else {
            alert('Password does not match')
        }
    }
  return (
    <section className={classes.auth}>
      <h1>SignUp</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required  />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Confirm Password</label>
          <input
            type='password'
            id='ConfirmPassword'
            required
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
          <button
            type='button'
            className={classes.toggle}
          >
            Have an account? Login
          </button>
        </div>
      </form>
    </section>
  )
}

export default Signup