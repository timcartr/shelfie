import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

// import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state={

        }
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`)
        .then( this.props.getMethod())
    }

    render() {
        let mappedInventory = this.props.inventory.map( (e,i) => {
            return(
                <Product key={i} inventory={this.props.inventory[i]}
                                deleteProduct = {this.deleteProduct}/>
            )
        })
        return(
            <div className='Dashboard'>
            { mappedInventory }
            </div>
        )
    }
}