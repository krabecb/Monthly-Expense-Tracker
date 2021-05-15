import React, {useEffect, useState} from 'react'
import './App.css';
import Expenses from './Expenses'

const App = () => {
  const [name, setName] = useState([])
  const [appAmount, setAppAmount] = useState([])

  useEffect(() => {
  	console.log(name)
  }, [name])

  useEffect(() => {
  	console.log(appAmount)
  }, [appAmount])

  const handleSubmit = (e) => {
  	e.preventDefault()

  	let nameArr = []
  	let amountArr = []

  	nameArr.push(e.currentTarget.expenseName.value)
  	amountArr.push(e.currentTarget.expenseAmount.value)

  	setName(name => [...name, nameArr])
  	setAppAmount(appAmount => [...appAmount, parseInt(amountArr)])
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expenses handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
