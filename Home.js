import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  return (
    <header className={classes}>
        <h3>Welcome to Expense Tracker!!!</h3>
        <div>
          <label>Your Profile is incomplete </label>
          <Link to='/Profile'>Complete now</Link>
        </div>
    </header>
  )
}

export default Home;
