import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Modal, Form, Label } from 'semantic-ui-react'

function Expenses({ handleSubmit, updateExpenseName, updateAmount }) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Track An Expense</Button>}
    >
      <Modal.Header>Track An Expense</Modal.Header>
      <Modal.Content id="modal-content-expense">
        <Form onSubmit={(e) => { handleSubmit(e); setOpen(false); }}>
        	<Label id="expense-name">Expense Name:</Label>
			<Form.Input
				type="text"
				name="expenseName"
				placeholder="Enter name of expense"
				// onSubmit={(e) => updateExpenseName(e)}
			/>
			<Label id="expense-amount">Amount:</Label>
			<Form.Input
				type="number"
				name="expenseAmount"
				placeholder="Enter amount"
				// onSubmit={(e) => updateAmount(e)}
			/>

        	<Modal.Actions>
          	<Button color='green' id="create-expense" type="submit">
            	Add Expense
          	</Button>
        	</Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default Expenses
