import React from 'react';
import { connect } from 'react-redux';
import {PayPalButton} from 'react-paypal-button';
import {addOrder} from '../actions';

const Pay = ({cart, buyer, addOrder, history}) => {
    const paypalOptions = {
        clientId: process.env.appId,
        intent: 'capture',
        currency: 'USD'
    }
    const design = {
        layout: 'vertical',
        shape: 'rect'
    }
    const sumar = () => {
        const reducer = (acumulator, currrentValue) => acumulator + currrentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }
    const success = data => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment: data
            }
            addOrder(newOrder);
            history.push('/practica-hooks/checkout/success');
        }
    }
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                <ul>
                    {
                        cart.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <div>${item.price}</div>
                            </li>
                        ))
                    }
                </ul>
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={design}
                        amount={sumar()}
                        onPaymentStart={() => console.log('start')}
                        onPaymentSuccess={(data) => success(data)}
                        onPaymentError={(error) => console.error('failed')}
                        onPaymentCancel={data => console.log('canceled')}
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    buyer: state.buyer
})

const mapDispatchToProps = {
    addOrder
}
export default connect(mapStateToProps, mapDispatchToProps)(Pay);