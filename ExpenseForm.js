import React, { useRef, useState } from 'react'

const ExpenseForm = () => {
    const amountInputRef = useRef();
    const descriptionInputRef = useRef();
    const categoryInputRef = useRef();
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        setEnteredAmount(amountInputRef.current.value);
        setEnteredDescription(descriptionInputRef.current.value);
        setEnteredCategory(categoryInputRef.current.value);
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
        <p>{enteredAmount} {enteredDescription} {enteredCategory} </p>
    </section>
  )
}

export default ExpenseForm
