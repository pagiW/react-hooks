import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@component/Home.jsx';
import Checkout from '@component/Checkout.jsx';
import Info from '@component/Info.jsx';
import Pay from '@component/Pay.jsx';
import Success from '@component/Success.jsx';
import Layout from '@component/Layout.jsx';
import '@styles/app.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
            <Switch>
                <Route exact path='/practica-hooks' component={Home} />
                <Route exact path='/practica-hooks/checkout' component={Checkout} />
                <Route exact path='/practica-hooks/checkout/info' component={Info} />
                <Route exact path='/practica-hooks/checkout/pay' component={Pay} />
                <Route exact path='/practica-hooks/checkout/success' component={Success} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;