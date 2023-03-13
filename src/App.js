import React, { useState } from 'react';
import './App.css';

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense';

const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Books',
    amount: 450.5,
    date: new Date(2023, 5, 12),
  },
  {
    id: 'e6',
    title: 'Eduaction',
    amount: 480.5,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e7',
    title: 'Laptop',
    amount: 990.5,
    date: new Date(2020, 6, 12),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = expense => {
    setExpenses((previousExpenses) => {
      return ([expense, ...previousExpenses])
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
