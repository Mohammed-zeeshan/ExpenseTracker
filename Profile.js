import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.container}>
        <div style={{flexDirection: 'row',display: 'flex', justifyContent: 'space-between'}}>
            <label>Contact Details</label>
            <button className={classes.cancel}>Cancel</button>
        </div>
        <div style={{padding:10}}>
            <label>Full Name: </label>
            <input type='text' />
            <label>Profile Photo URL: </label>
            <input type='text' />
        </div>
        <button>Update</button>
    </div>
  )
}

export default Profile
