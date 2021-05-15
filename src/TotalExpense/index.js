import React from 'react'
import RemainingBudget from '../RemainingBudget'
import { Item } from 'semantic-ui-react'

const TotalExpense = ({ name, appAmount, income }) => {
  console.log(name)
  console.log(appAmount)

  const nameAndAmount = name.map((name, i) => {
    return(
      <Item key={i}>
        <Item.Content>
          <Item.Header as='a'>{name}</Item.Header>
          <Item.Meta>{appAmount[i]}</Item.Meta>
        </Item.Content>
      </Item>
    )
  })

  const total = appAmount.reduce((a, c) => {
    return a + c
  }, 0)

  return(
    <div>
      <Item.Group>
        {nameAndAmount}
      </Item.Group>  

      <h2>Total: {total}</h2>
      <RemainingBudget total={total} income={income} />
    </div>
  )
}



export default TotalExpense