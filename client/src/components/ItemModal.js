import React,{ Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemActions';
import uuid from 'uuid';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  OnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit = (e) => {

      e.preventDefault();

      this.toggle();

      this.props.addItem(
        {
          id: uuid(),
          name: this.state.name
        }
      );
  }

  render(){
    return (
      <Container>
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
                  onChange={this.OnChange} 
                  value={this.state.name} />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}} block
                >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default connect(null,{ addItem })(ItemModal)
