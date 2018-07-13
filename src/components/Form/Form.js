import React, {Component} from 'react'
import Axios from '../../../node_modules/axios';
// import axios from 'axios'

// import './Form.css'

export default class Form extends Component {
    constructor() {
        super()

        this.state={
            name:'',
            price: 0,
            imgurl: '',
        }
    }

    handleNameChange(val) {
        this.setState({
            name: val
        })
    }
    
    handlePriceChange(val) {
        this.setState({
            price: val
        })
    }
    
    handleImgurlChange(val) {
        this.setState({
            imgurl: val
        })
    }

    clearInput() {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
            selectedProduct: null
        })
    }

    addToInventory(body){
        this.setState({
            selectedProduct: null
        })
        Axios.post('./api/product', this.state)
        .then( this.props.getMethod())
        this.clearInput()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.data != this.props.data){
            
        }

    }

    render() {
        return(
            <div className='Form'>
            <input type="text" onChange={ e => this.handleImgurlChange( e.target.value )}placeholder="Img URL"/>
            <input type="text" onChange={ e => this.handleNameChange( e.target.value )}placeholder="Product Name"/>
            <input type="text" onChange={ e => this.handlePriceChange( e.target.value )}placeholder="Product Price"/>
            <button onClick={ () => this.clearInput() }>Cancel</button>
            <button onClick={ () => this.addToInventory() }>Add to Inventory</button>
            </div>
        )
    }
}