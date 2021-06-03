import React, { useRef } from 'react';
import '@styles/form.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBuyer } from '../actions';

const Info = ({cart, addBuyer, history}) => {
    const form = useRef(null);
    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const theBuyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone')
        }

        addBuyer(theBuyer);
        if (theBuyer.name && theBuyer.phone && theBuyer.state && theBuyer.email && theBuyer.city && theBuyer.country && theBuyer.cp && theBuyer.address && theBuyer.apto) {
            history.push('/practica-hooks/checkout/pay');
        }
    }
    return ( <main>
        <h2>Llena este formulario:</h2>
        <div className='form'>
            <form ref={form}>
                <input type="text" placeholder="Nombre completo" name="name" />
                <input type="text" placeholder="Correo Electronico" name="email" />
                <input type="text" placeholder="Direccion" name="address" />
                <input type="text" placeholder="apto" name="apto" />
                <input type="text" placeholder="Ciudad" name="city" />
                <input type="text" placeholder="Pais" name="country" />
                <input type="text" placeholder="Estado" name="state" />
                <input type="text" placeholder="Codigo postal" name="cp" />
                <input type="text" placeholder="Telefono" name="phone" />
                <div className='buttons'>
                    <Link to='/practica-hooks/checkout' className='goback'>regresar</Link>
                    <button type='button' onClick={handleSubmit} className='pay'>pagar</button>
                </div>
            </form>
            <ul className='product'>
                {cart.map((item, index) => (
                    <li key={index}>
                        <h3>producto: {item.title}</h3>
                        <h4>precio: ${item.price}</h4>
                    </li>
                ))}
            </ul>
        </div>
    </main> );
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = {
    addBuyer
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);