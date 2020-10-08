import React, { Component } from 'react';
import CreateHouse from './CreateHouse';
import { Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';

class ManagedHouse extends Component {

    constructor() {
        super();

        this.state = {
            isShowCreateModal: false,
            activeTab: '1',
        }
    }

    toggle(tab) {
        if (this.state.activeTab != tab) {
            this.setState({ activeTab: tab });
        }
    }

    render() {
        return (
            <>
                <CreateHouse isShowCreateModal={this.state.isShowCreateModal} onShowCreateModal={() => this.onShowCreateModal()} />
                <div className="row" style={{ paddingTop: "3px", backgroundColor: "white" }}>
                    <div className="col" style={{ textAlign: "left", marginLeft: "2%" }}>
                        <p class="font-weight-light-bold" style={{ fontSize: "25px" }}>Managed Houses</p>
                    </div>
                    <div className="col">
                        <div className="input-group" style={{ width: "97%" }}>
                            <input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "3px", backgroundColor: "white" }}>
                    <div className="col" style={{ textAlign: "left", marginLeft: "2%", marginBottom: "1%" }}>
                        <button type="button" class="btn btn-success" style={{ width: "20%" }} onClick={() => this.onShowCreateModal()}>Add New House</button>
                    </div>
                    <div className="col">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Tab1
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    More Tabs
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
                {this.renderListBranch()}
            </>
        )
    }

    onShowCreateModal() {
        var isShow = this.state.isShowCreateModal;
        this.setState({
            isShowCreateModal: !isShow
        })
    }

    renderListBranch() {
        var elements = [];
        var i = 0;
        while (i < 10) {
            elements.push(
                <div className="p-2" style={{ width: "15%", marginLeft: "1%" }}>
                    <div className="card" style={{ width: "100%" }}>
                        <div className="card-body" style={{ textAlign: "left" }}>
                            <h5 className="card-title" style={{ textAlign: "center" }}>999999$</h5>
                            <p className="card-text"><strong>Address: </strong> ABCD</p>
                            <p className="card-text"><strong>District: </strong> ABCD</p>
                            <p className="card-text"><strong>City: </strong> ABCD</p>
                            <p className="card-text"><strong>Type: </strong> ABCD</p>
                            <p className="card-text"><strong>Capacity: </strong> ABCD</p>
                            <p className="card-text"><strong>Owner: </strong> ABCD</p>
                            <p className="card-text"><strong>Employee: </strong> ABCD</p>
                            <p className="card-text"><strong>Branch: </strong> ABCD</p>
                            <p className="card-text"><strong>Customer: </strong> ABCD</p>
                        </div>
                    </div>
                </div>
            )
            i++;
        }

        return (
            <div class="d-flex flex-wrap" style={{ overflowY: "scroll", height: "83%" }}>
                {elements}
            </div>
        )
    }
}

export default ManagedHouse;
