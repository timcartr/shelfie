import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

// import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state={

        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`)
        .then( this.props.getMethod())
    }

    updateProduct(id) {
        axios.put(`/api/product/${id}`)
        .then( this.props.getMethod())
    }

    render() {
        let mappedInventory = this.props.inventory.map( (e,i) => {
            return(
                <Product 
                    key={i}
                    inventory={this.props.inventory[i]}
                    deleteProduct = {this.deleteProduct}
                    selectProductFn = { this.props.selectProductFn }
                    updateProduct = { this.updateProduct }
                    />
            )
        })
        return(
            <div className='Dashboard'>
            { mappedInventory }
            </div>
        )
    }
}