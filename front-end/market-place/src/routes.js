import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Client from './pages/Client'
import Product from './pages/Product';
import OrderList from './pages/Orders/OrderList'
import OrderCreate from './pages/Orders/OrderCreate';
import OrderShow from './pages/Orders/OrderShow';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orders" exact component={OrderList} />
        <Route path="/orders/create" exact component={OrderCreate} />
        <Route path="/client" exact component={Client} />
        <Route path="/product" component={Product} />
        <Route path="/order/:id" component={OrderShow} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;