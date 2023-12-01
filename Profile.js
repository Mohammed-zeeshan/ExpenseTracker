import { useRef } from 'react'
import classes from './Profile.module.css'

const Profile = (props) => {
    const nameInputRef = useRef();
    const photoInputRef = useRef();
    const updateHandler = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const photourl = photoInputRef.current.value;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0'
        fetch(
            url,{
            method: 'POST',
            body: JSON.stringify({
                idToken: props.id,
                displayName: name,
                photoUrl: photourl,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(res => {
            if(res.ok) {
                return res.json();
            }
            else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed';
                    throw new Error(errorMessage)
                })
            }
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err.message);
        })
    }
    const getData = () => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0',{
            method: 'POST',
            body: JSON.stringify({idToken: props.id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div className={classes.container}>
        <div style={{flexDirection: 'row',display: 'flex', justifyContent: 'space-between'}}>
            <label>Contact Details</label>
            <button className={classes.cancel}>Cancel</button>
        </div>
        <div style={{padding:10}}>
            <label htmlFor='name'>Full Name: </label>
            <input type='text' ref={nameInputRef} required/>
            <label htmlFor='photo'>Profile Photo URL: </label>
            <input type='text' ref={photoInputRef} required/>
        </div>
        <button onClick={updateHandler}>Update</button>
    </div>
  )
}

export default Profile
