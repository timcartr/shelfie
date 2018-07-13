import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state={
      inventory:[]
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then( results => {
     this.setState({
       inventory: results.data
     })
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={ this.state.inventory }
                    getMethod = { this.componentDidMount }/>
        <Form getMethod = { this.componentDidMount }/>
        <Header />
      </div>
    );
  }
}

export default App;
