import React, { Component } from 'react';
import CreateEmployee from './CreateEmployee';

class ManagedEmployee extends Component {

    constructor() {
        super();

        this.state = {
            isShowCreateModal: false
        }
    }

    render() {
        return (
            <>
                <CreateEmployee isShowCreateModal={this.state.isShowCreateModal} onShowCreateModal={() => this.onShowCreateModal()} />
                <div className="row" style={{ paddingTop: "3px", backgroundColor: "white" }}>
                    <div className="col" style={{ textAlign: "left", marginLeft: "2%" }}>
                        <p class="font-weight-light-bold" style={{ fontSize: "25px" }}>Managed Employees</p>
                    </div>

                </div>
                <div className="row" style={{ paddingTop: "3px", backgroundColor: "white" }}>
                    <div className="col" style={{ textAlign: "left", marginLeft: "2%", marginBottom: "1%" }}>
                        <button type="button" class="btn btn-success" style={{ width: "20%" }} onClick={() => this.onShowCreateModal()}>Add New Employee</button>
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
                {this.renderEmployeeList()}
            </>
        )
    }

    onShowCreateModal() {
        var isShow = this.state.isShowCreateModal;
        this.setState({
            isShowCreateModal: !isShow
        })
    }

    renderEmployeeList() {
        var elements = [];
        var i = 0;
        while (i < 10) {
            elements.push(
                <div className="p-2" style={{ width: "15%", marginLeft: "1%" }}>
                    <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src="https://i.imgur.com/BRmMSN6.jpg" alt="Card image cap" style={{ height: "25vh" }} />
                        <div className="card-body">
                            <h5 className="card-title">Natasha Romanoff</h5>
                            <p className="card-text"></p>
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

export default ManagedEmployee;
