import React from 'react'

const RemainingBudget = ({ total, income }) => {

	const result = () => {
		let subtraction = income - total
		return subtraction
	}
	
	return(
		<div>
			<h2>Remaining Monthly Balance: {result()}</h2>
		</div>
	)
}

export default RemainingBudget