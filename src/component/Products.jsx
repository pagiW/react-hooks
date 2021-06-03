import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../actions';

const Products = ({products, addToCart}) => {
    return (
        <ul className='products'>
            {
                products.map(product => <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>nombre: {product.title}</h2>
                    <p>descripcion: {product.description}</p>
                    <p>precio: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>comprar</button>
                </li>)
            }
        </ul>
    );
}

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(Products);