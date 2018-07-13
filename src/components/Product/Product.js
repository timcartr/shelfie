import React from 'react'
// import axios from 'axios'

import './Product.css'

export default function Product(props) {
    return(
        <div className='Product'>
            <img src={ props.inventory.imgurl } alt="" height="200px"/>
            <p>{ props.inventory.name }</p>
            <p>${ props.inventory.price }</p>
            <button onClick={ () => props.deleteProduct(props.inventory.product_id) }>
                Delete
            </button>
            <button onClick={ () => props.selectProduct(props.inventory.product_id) }>Edit</button>
            
            
            
            
        </div>
    )
}