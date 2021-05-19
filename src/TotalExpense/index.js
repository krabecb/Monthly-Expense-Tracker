import React from 'react'
import RemainingBudget from '../RemainingBudget'
import { Item } from 'semantic-ui-react'

const TotalExpense = ({ expenseInfo, income }) => {

  //WE NEED TO LOOP SOMEHOW
  let expenseList = expenseInfo.map((expense, i) => {
    return(
      <Item key={i}>
        <Item.Content>
          <Item.Header as='a'>{expense.name}</Item.Header>
          <Item.Meta>{expense.amount}</Item.Meta>
        </Item.Content>
      </Item>
    )
  })

  let total = expenseInfo.reduce((acc, curr) => {
    //curr represents the items in an array, which would be an object for this case
    //acc represents our starting value, which we indicated as 0
    console.log(curr)
    return acc + curr.amount
  }, 0)

  return(
    <div>
      <Item.Group>
        {expenseList}
      </Item.Group>  

      <h2>Total Expenses: {total}</h2>
      <RemainingBudget total={total} income={income} />
    </div>
  )
}



export default TotalExpense