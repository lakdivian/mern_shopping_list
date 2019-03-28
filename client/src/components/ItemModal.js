import React,{ Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  OnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div>
        <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
        >ADD ITEM</Button>

        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
              Add To Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Label for="item">item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Item"
                  onChange={this.OnChange} />
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default connect()(ItemModal)
