import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Items from './Items';

const ExpenseForm = (props) => {
    const amountInputRef = useRef();
    const descriptionInputRef = useRef();
    const categoryInputRef = useRef();
    const [items, setItems] = useState([]);
    const fetchItemsHandler = useCallback(async() => {
        try {
            const response = await fetch('https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses.json')
            if(!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const loadedItems = [];
            for (const key in data) {
                loadedItems.push({
                id: key,
                amount: data[key].amount,
                description: data[key].description,
                category: data[key].category,
                })
            }
            setItems(loadedItems);
        }
        catch (error) {
            console.log(error.message);
        }
    }, [])
    useEffect(() => {
        fetchItemsHandler()
    }, [fetchItemsHandler])
    const submitHandler = async(event) => {
        event.preventDefault();
        const data = {
            id: Math.random().toString(),
            amount: amountInputRef.current.value,
            description: descriptionInputRef.current.value, 
            category: categoryInputRef.current.value,
        }
        try {
            const response = await axios.post('https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses.json',data)
            console.log(response.data);
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const updateHandler = async(number) => {
        const data = {
            amount: amountInputRef.current.value,
            description: descriptionInputRef.current.value, 
            category: categoryInputRef.current.value,
        }
        try {
            const response = await axios.put(`https://track-expense-4f458-default-rtdb.firebaseio.com/Expenses/${number}.json`,data)
            console.log(response.data);
        }
        catch (err) {
            console.log(err.message)
        }
    }

    let content = <p></p>;

    if (items.length > 0){
        content = items.map((data) => (
            <Items 
                key={data.id}
                id={data.id}
                amount={data.amount}
                description={data.description}
                category={data.category}
                ids={updateHandler}
            >
                {props.children}
            </Items>
        ))
    }
  return (
    <section>
        <form onSubmit={submitHandler}>
            <label>Amount</label>
            <input type='number' ref={amountInputRef} required />
            <label>Description</label>
            <input type='text' ref={descriptionInputRef} required />
            <label>Category</label>
                <select ref={categoryInputRef} required >
                    <option>Food</option>
                    <option>Fuel</option>
                    <option>Salary</option>
                </select>
            <button>Add</button>
        </form>
        {content}
    </section>
  )
}

export default ExpenseForm
