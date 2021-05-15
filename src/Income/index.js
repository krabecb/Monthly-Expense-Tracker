import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Modal, Form, Label } from 'semantic-ui-react'

function Income({ handleSubmit2 }) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Income</Button>}
    >
      <Modal.Header>Add Income</Modal.Header>
      <Modal.Content id="modal-content-income">
        <Form onSubmit={(e) => { handleSubmit2(e); setOpen(false); }}>
        	<Label id="income">Monthly Income:</Label>
			   <Form.Input
				    type="number"
				    name="income"
				    placeholder="Enter amount"
			   />
        	<Modal.Actions>
          	<Button color='green' id="create-income" type="submit">
            	Add Income
          	</Button>
        	</Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default Income