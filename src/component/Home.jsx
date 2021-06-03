import React from 'react';
import Products from '@component/Products.jsx';
import { connect } from 'react-redux';
import '@styles/home.scss';

const Home = ({ products }) => {
    return (
        <>
            <h1>Esto es un proyecto para practicar react hooks (NO COMPRES NADA)</h1>
            <Products products={products}/>
        </>
    );
}
const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(Home);