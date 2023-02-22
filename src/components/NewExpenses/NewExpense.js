import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => { setIsEditing(true) }

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className='new-expense'>
        {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} isCanceled={setIsEditing} /> : <button onClick={startEditingHandler}>Add New Expense</button>}


    </div>
}

export default NewExpense;