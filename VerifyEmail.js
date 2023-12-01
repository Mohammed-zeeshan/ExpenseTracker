import React, { useContext } from 'react'
import AuthContext from '../pages/auth-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './VerifyEmail.module.css'

const VerifyEmail = (props) => {
    const Authctx = useContext(AuthContext);
    const history = useHistory();
    const verifyHandler = (event) => {
        event.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0',{
            method: 'POST',
            body: JSON.stringify({
                requestType: 'VERIFY_EMAIL',
                idToken: props.id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                let errorMessage = 'Authentication failed';
                throw new Error(errorMessage);
                });
            }
            }).then(data => {
            history.replace('/Home');
            }).catch((err) => {
            alert(err.message);
            })
    }
  return (
    <div className={classes.container}><button onClick={verifyHandler}>Verify</button></div>
  )
}

export default VerifyEmail;
