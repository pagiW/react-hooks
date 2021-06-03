import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '@styles/layout.scss';

const Layout = ({cart}) => {
    return (
        <header>
            <Link to='/practica-hooks'><h1>Practica hooks</h1></Link>
            <Link to='/practica-hooks/checkout'>checkout {cart.length}</Link>
        </header>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Layout);