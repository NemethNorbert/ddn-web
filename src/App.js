import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css';

import Header from './components/header/Header'
import Agents from './components/Agents'

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <Agents />
        </div>
    );
  }
}

export default App;
