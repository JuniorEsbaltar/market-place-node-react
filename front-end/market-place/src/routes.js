import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Client from './pages/Client'
import Product from './pages/Product';
import OrderList from './pages/Orders/OrderList'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/orders" exact component={OrderList} />
        {/* <Route path="/orders/:id" exact component={OrderList} /> */}
        <Route path="/client" exact component={Client} />
        <Route path="/product" component={Product} />x'
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;