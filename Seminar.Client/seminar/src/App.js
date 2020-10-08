
import React, { Component } from 'react';
import './App.css';

import AdminHomePage from './Admin/AdminHomePage';
import ManagedEmployee from './Admin/employee/ManagedEmployee';
import ManagedBranch from './Admin/branch/ManagedBranch';
import ManagedHouse from './Admin/house/ManagedHouse';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftMenu from './Components/LeftMenu';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <LeftMenu />
        <ToastContainer />
        <Router>
          <Route path='/admin' exact={true} component={AdminHomePage} />
          <Route path='/admin/employee' exact={true} component={ManagedEmployee} />
          <Route path='/admin/branch' exact={true} component={ManagedBranch} />
          <Route path='/admin/house' exact={true} component={ManagedHouse} />
        </Router>
      </div >
    );
  }
}

export default App;
