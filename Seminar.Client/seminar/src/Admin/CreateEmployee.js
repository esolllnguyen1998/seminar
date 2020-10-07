import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

class CreateEmployee extends Component {

    constructor() {
        super();
    }
    render() {
        var isShow = this.props.isShowCreateModal;
        return (
            <Modal isOpen={isShow}>
                <ModalHeader>Add Employee</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Full Name</Label>
                            <Input type="text" placeholder="Enter Full Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Address</Label>
                            <Input type="text" placeholder="Enter Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Phone Number</Label>
                            <Input type="text" placeholder="Enter Phone Number" />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>Sex</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Male
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Female
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Other
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>Birthday</Label>
                            <Input type="date" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Salary</Label>
                            <Input type="text" placeholder="Enter Slary" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >Add</Button>{' '}
                    <Button color="secondary" onClick={() => this.props.onShowCreateModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CreateEmployee;
