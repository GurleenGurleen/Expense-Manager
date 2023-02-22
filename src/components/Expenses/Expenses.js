import React, { useState } from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (


        <Card className="expenses">

            <ExpenseFilter
                onChangeFilter={filterChangeHandler}
                selected={filteredYear}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>

    )
}

export default Expenses;