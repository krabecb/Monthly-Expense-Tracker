import React, {useState} from 'react'
import './App.css';
import Expenses from './Expenses'

const App = () => {
  const [name, setName] = useState([])
  const [appAmount, setAppAmount] = useState([])

  const updateExpenseName = (e) => {
  	console.log(e.target.value)
  	setName(e.target.value)
  }

  const updateAmount = (e) => {
  	console.log(e.target.value)
  	setAppAmount(parseInt(e.target.value))
  }

  const handleSubmit = (e) => {
  	e.preventDefault()
  	// setOpen(false)
  	setName('')
  	setAppAmount('')
  	console.log(name)
  	console.log(typeof(name))
  	console.log(appAmount)
  	console.log(typeof(appAmount))
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expenses 
      	updateExpenseName={updateExpenseName} 
      	updateAmount={updateAmount} 
      	handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
