import './styles/global.css'
import './App.css';
import Client from './pages/Client'
import Home from './pages/Home'
import Product from './pages/Product'
import Order from './pages/Orders/Order'
import OrderCreate from './pages/Orders/OrderCreate'
import OrderShow from './pages/Orders/OrderShow'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const routes = [{
     path: "/",
     exact: true,
     main: Home
   },
   {
     path: "/clientes",
     main: Client
   },
   {
     path: "/produtos",
     main: Product
   },
   {
     path: "/pedidos", 
     exact: true,
     main: Order
   },
   {
      path: "/pedidos/novo", 
      main: OrderCreate
    },
   {
      path: "/pedido/:id", 
      main: OrderShow
    }
 ];

function App() {
  return (
     <Router>
      <div className="container">
         <header>
            <h1>Market Place</h1>
         </header>
         <aside>
            <ul >
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/clientes">Clientes</Link>
               </li>
               <li>
                  <Link to="/produtos">Produtos</Link>
               </li>
               <li>
                  <Link to="/pedidos">Pedidos</Link>
               </li>
               <li>
                  <Link to="/pedidos/novo">Novo pedido</Link>
               </li>
            </ul>
         </aside>
         <main>
            <div className="content">
            <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
            </div>
         </main>
      </div>
    </Router>
  );
}

export default App;
