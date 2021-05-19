import React, {useEffect, useState} from 'react'
import './App.css';
import Flip from 'react-reveal/Flip';
import Expenses from './Expenses'
import Income from './Income'
import TotalExpense from './TotalExpense'

const App = () => {

  //REFACTOR: PERHAPS ONE USESTATE THAT STORES EVERYTHING AS AN OBJECT: {name: "Honda", amount: 620} 
  //INCOME WILL PROBABLY HAVE IT'S OWN USESTATE, SO THAT COULD STAY THE SAME.
  //THE MAIN GOAL IS TO BE ABLE TO DELETE NAME AND AMOUNT AT THE SAME TIME. 
  const [expenseInfo, setExpenseInfo] = useState([])
  const [income, setIncome] = useState('')

  useEffect(() => {
    console.log("Here is expenseInfo:")
  	console.log(expenseInfo)
  }, [expenseInfo])

  useEffect(() => {
  	console.log(income)
  }, [income])

  const handleSubmit = (e) => {
  	e.preventDefault()

  	setExpenseInfo(expenseInfo => [...expenseInfo, {name: e.currentTarget.expenseName.value, amount: parseInt(e.currentTarget.expenseAmount.value)}])
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
    <TotalExpense expenseInfo={expenseInfo} income={income} />
    </div>
  );
}

export default App;
