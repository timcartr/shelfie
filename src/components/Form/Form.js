import React, {Component} from 'react'
import Axios from '../../../node_modules/axios';
import axios from 'axios'

// import './Form.css'

export default class Form extends Component {
    constructor() {
        super()

        this.state={
            name:'',
            price: '',
            imgurl: '',
            selectedProduct: '',
            buttonText: 'Add to Inventory',
            shouldUpdate: false
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
            price: '',
            imgurl: '',
            selectedProduct: ''
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

    componentDidUpdate(prevProps) {
        if(this.props.selectedProduct !== prevProps.selectedProduct){
            this.setState({
                selectedProduct: this.props.selectedProduct,
                buttonText: "Save Changes",
                shouldUpdate: true
            })
        }
    }

    updateInventory(){
        let { name, price, imgurl } = this.state
        axios.put(`/api/product/${this.props.selectedProduct}`, {name,price,imgurl})
        .then( this.props.getMethod())
        this.clearInput()
    }

    render() {
        return(
            <div className='Form'>
                <input type="text" onChange={ e => this.handleImgurlChange( e.target.value )}placeholder="Img URL" value={this.state.imgurl}/>
                <input type="text" onChange={ e => this.handleNameChange( e.target.value )}placeholder="Product Name" value={this.state.name}/>
                <input type="text" onChange={ e => this.handlePriceChange( e.target.value )}placeholder="Product Price" value={this.state.price}/>
                <button onClick={ () => this.clearInput() }>Cancel</button>
                <button onClick={ () => this.state.shouldUpdate ? this.updateInventory() : this.addToInventory() }>{this.state.buttonText}</button>
            </div>
        )
    }
}