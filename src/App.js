import React, {useEffect, useState} from 'react'
import './App.css';
import Expenses from './Expenses'
import Income from './Income'
import TotalExpense from './TotalExpense'

const App = () => {
  const [name, setName] = useState([])
  const [appAmount, setAppAmount] = useState([])
  const [income, setIncome] = useState('')

  useEffect(() => {
  	console.log(name)
  }, [name])

  useEffect(() => {
  	console.log(appAmount)
  }, [appAmount])

  useEffect(() => {
  	console.log(income)
  }, [income])

  const handleSubmit = (e) => {
  	e.preventDefault()

  	let nameArr = []
  	let amountArr = []

  	nameArr.push(e.currentTarget.expenseName.value)
  	amountArr.push(e.currentTarget.expenseAmount.value)

  	setName(name => [...name, nameArr])
  	setAppAmount(appAmount => [...appAmount, parseInt(amountArr)])
  }

   const handleSubmit2 = (e) => {
  	e.preventDefault()

  	setIncome(parseInt(e.currentTarget.income.value))
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Income handleSubmit2={handleSubmit2} />
      <Expenses handleSubmit={handleSubmit} />
      <TotalExpense name={name} appAmount={appAmount}/>
    </div>
  );
}

export default App;
