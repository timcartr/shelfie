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
      inventory:[],
      selectedProduct:null
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then( results => {
     this.setState({
       inventory: results.data
     })
    })
  }

  selectProduct(id) {
    this.setState({
      selectedProduct: id
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard  inventory={ this.state.inventory }
                    getMethod = { this.componentDidMount }
                    selectProduct = { this.selectProduct }/>
        <Form getMethod = { this.componentDidMount }
              selectProduct = { this.state.selectProduct } />
        <Header />
        { this.state.selectedProduct }
      </div>
    );
  }
}

export default App;
