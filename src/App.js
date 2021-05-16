import React, {useEffect, useState} from 'react'
import './App.css';
import Flip from 'react-reveal/Flip';
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
      <Flip left>
      	<h1>BudgetR</h1>
      </Flip>
	  <Income className="Modals" handleSubmit2={handleSubmit2} />
	  <Expenses className="Modals" handleSubmit={handleSubmit} />
      <TotalExpense name={name} appAmount={appAmount} income={income} />
    </div>
  );
}

export default App;
