import React, { Component } from 'react';

class LeftMenu extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/employee">Employee</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/branch">Branch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/house">House</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default LeftMenu;
