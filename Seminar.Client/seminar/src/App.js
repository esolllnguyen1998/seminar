
import React, { Component } from 'react';
import './App.css';

import AdminHomePage from './Admin/AdminHomePage';
import ManagedEmployee from './Admin/ManagedEmployee';
import ManagedBranch from './Admin/ManagedBranch';
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
        </Router>
      </div >
    );
  }
}

export default App;
