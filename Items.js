import axios from 'axios';
import React from 'react'

const Items = (props) => {
    const deleteHandler = async(event) => {
        event.preventDefault();
        try {
            await axios.delete(`https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses/${props.id}.json`)
            console.log('Expense successfully deleted')
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const updateHandler = async(event) => {
        event.preventDefault();
        props.ids(props.id);
    }
  return (
    <div>
        <div key={props.id} style={{padding: 5, justifyContent: 'space-around'}}><label>{props.amount} - {props.description} - {props.category}</label>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={updateHandler}>Edit</button>
        </div>
    </div>
  )
}

export default Items;
