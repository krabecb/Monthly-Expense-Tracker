import React, {useEffect, useState} from 'react'
import './App.css';
import Expenses from './Expenses'

const App = () => {
  const [name, setName] = useState([])
  const [appAmount, setAppAmount] = useState([])

  // const updateExpenseName = (e) => {
  // 	console.log(e.target.value)
  // 	setName(name => [...name, e.target.value])
  // }

  // const updateAmount = (e) => {
  // 	console.log(e.target.value)
  // 	setAppAmount(appAmount => [...appAmount, parseInt(e.target.value)])
  // }

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

  	// setName(e.currentTarget.expenseName.value)
  	nameArr.push(e.currentTarget.expenseName.value)
  	// console.log(nameArr)
  	// console.log(e.currentTarget.expenseName.value)

  	// setAppAmount(e.currentTarget.expenseAmount.value)
  	amountArr.push(e.currentTarget.expenseAmount.value)
  	// console.log(amountArr)
  	// console.log(e.currentTarget.expenseAmount.value)

  	setName(name => [...name, nameArr])
  	setAppAmount(appAmount => [...appAmount, parseInt(amountArr)])
  	// setName('')
  	// setAppAmount('')
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expenses handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
