import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state={
      inventory:[],
      selectedProduct:''
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
      <HashRouter>
        <div className="App">
          {/* <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/wizard' component={Dashboard} />

          </Switch> */}


          <Dashboard  inventory={ this.state.inventory }
                      getMethod = { this.componentDidMount }
                      selectProductFn = { this.selectProduct }/>
          <Form getMethod = { this.componentDidMount }
                selectedProduct = {this.state.selectedProduct }/>
          <Header />
          { this.state.selectedProduct }
        </div>
      </HashRouter>
    );
  }
}

export default App;
