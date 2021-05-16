import React from 'react'

const RemainingBudget = ({ total, income }) => {

	const result = income - total
	
	return(
		<div>
			<h2>Remaining Monthly Balance: {result}</h2>
		</div>
	)
}

export default RemainingBudget