import './styles/global.css'
import './App.css';
import Client from './pages/Client'
import Home from './pages/Home'
import Product from './pages/Product'
import Order from './pages/Orders/Order'
import OrderCreate from './pages/Orders/OrderCreate'
import OrderShow from './pages/Orders/OrderShow'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { 
   FaHome, 
   FaUserAlt, 
   FaClipboardList,
   FaClipboardCheck 
} from 'react-icons/fa'

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
            <Link to="/" className="icon-home">
               <FaHome size ={50}/>
            </Link>
            <h1>Market Place</h1>
            <div className="options">
               <div className="link">
                  <Link to="/clientes">
                     <FaUserAlt/>Clientes
                  </Link>
               </div>
               <div className="link">
                  <Link to="/produtos">
                     <FaClipboardList/>Produtos
                  </Link>
               </div>
               <div className="link">
                  <Link to="/pedidos">
                     <FaClipboardCheck/>Pedidos
                  </Link>
               </div>
               <div className="link">
                  <Link to="/pedidos/novo">
                     Novo pedido
                  </Link>
               </div>
            </div>
         </header>
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
