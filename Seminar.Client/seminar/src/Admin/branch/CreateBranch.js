import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

class CreateBranch extends Component {
    constructor() {
        super();
    }
    render() {
        var isShow = this.props.isShowCreateModal;
        return (
            <Modal isOpen={isShow}>
                <ModalHeader>Add Branch</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Address</Label>
                            <Input type="text" placeholder="Enter Address" />
                        </FormGroup>
                        <FormGroup>
                            <Label>District</Label>
                            <Input type="text" placeholder="Enter District" />
                        </FormGroup>
                        <FormGroup>
                            <Label>City</Label>
                            <Input type="text" placeholder="Enter City" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Phone Number</Label>
                            <Input type="text" placeholder="Enter Phone Number" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Fax</Label>
                            <Input type="text" placeholder="Enter Fax" />
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

export default CreateBranch;
