import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {

    return (


        <Card className="expenses">
            <ExpenseFilter />
            {props.items.map((expense) => (
                /*key concept: always add key{Higly preferred} */
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}

        </Card>

    )
}

export default Expenses;