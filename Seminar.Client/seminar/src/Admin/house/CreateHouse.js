import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

class CreateHouse extends Component {
    constructor() {
        super();
    }
    render() {
        var isShow = this.props.isShowCreateModal;
        return (
            <Modal isOpen={isShow} >
                <ModalHeader>Add House</ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="row">
                            <div className="col">
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
                            </div>
                            <div className="col">
                                <FormGroup>
                                    <Label>Price</Label>
                                    <Input type="text" placeholder="Enter Price" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>House Type</Label>
                                    <select class="custom-select">
                                        <option selected>Select House Type</option>
                                        <option value="1">Villa</option>
                                        <option value="2">House</option>
                                        <option value="3">Houseeeeeeee</option>
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <Label>House Owner</Label>
                                    <select class="custom-select">
                                        <option selected>Select House Owner</option>
                                        <option value="1">Thang</option>
                                        <option value="2">Thai</option>
                                    </select>
                                </FormGroup>
                            </div>

                        </div>
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

export default CreateHouse;
