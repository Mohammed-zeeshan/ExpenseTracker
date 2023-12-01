import { useContext, useState } from 'react'
import classes from './Profile.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AuthContext from '../pages/auth-context';

const Profile = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [photoInput, setPhotoInput] = useState('');
    const authCtx = useContext(AuthContext)
    const history = useHistory();
    const logoutHandler = (event) => {
        event.preventDefault();
        history.replace('/');
        authCtx.logout();
    }
    const nameInputHandler = (event) => {
        setNameInput(event.target.value)
    }
    const photoInputHandler = (event) => {
        setPhotoInput(event.target.value)
    }
    const updateHandler = (event) => {
        event.preventDefault();
        const name = nameInput;
        const photourl = photoInput;
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
            body: JSON.stringify({idToken: props.id,returnSecureToken: true}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.ok) {
                return res.json();
            }
            else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed';
                    throw new Error(errorMessage)
                })
            }
        })
        .then(data => {
            console.log(data.users[0]);
            setNameInput(data.users[0].displayName);
            setPhotoInput(data.users[0].photoUrl);
        })
        .catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div className={classes.container}>
        <div style={{flexDirection: 'row',display: 'flex', justifyContent: 'space-between'}}>
            <label>Contact Details</label>
            <div><button className={classes.cancel}>Cancel</button>
            <button onClick={logoutHandler}>Logout</button></div>
        </div>
        <div style={{padding:10}}>
            <label htmlFor='name'>Full Name: </label>
            <input type='text' value={nameInput} onChange={nameInputHandler} required/>
            <label htmlFor='photo'>Profile Photo URL: </label>
            <input type='text' value={photoInput} onChange={photoInputHandler} required/>
        </div>
        <button onClick={updateHandler}>Update</button>
    </div>
  )
}

export default Profile
