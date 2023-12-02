import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpenseForm = () => {
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
    let content = <p></p>;

    if (items.length > 0){
        <p>{items.amount} - {items.description} - {items.category}</p>
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
