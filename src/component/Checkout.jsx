import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {delet} from '../actions';
import '@styles/checkout.scss';

const Checkout = ({cart, delet}) => {
    const sumar = () => {
        const reducer = (acumulator, currrentValue) => acumulator + currrentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }
    return (
        <main className='checkout'>
            <div className='list-checkout'>
                {cart.length > 0 ? <h1>Tus pedidos papaaaaaaaaaaaa:</h1> : <h1>compra algo o no te devuelvo a tus padres</h1>}
                <ul>
                    {
                        cart.map((item, i) => <li key={i}>
                            <h2>{item.title}</h2>
                            <h3>precio: ${item.price}</h3>
                            <button onClick={() => delet(i)}>eliminar</button>
                        </li>)
                    }
                </ul>
            </div>
            {cart.length > 0 && <div>
                <h3>{`precio total: $ ${sumar()}`}</h3>
                <Link to='/practica-hooks/checkout/info'><button>continuar compra</button></Link>
            </div>}
        </main>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = {
    delet
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);