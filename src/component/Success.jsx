import React from 'react';
import { connect } from 'react-redux';

const Success = ({buyer}) => {
    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>{buyer.name}, Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="Success-map">{buyer.address}</div>
            </div>
        </div>
    );
}

const mapState = state => ({
    buyer: state.buyer
});

export default connect(mapState)(Success);