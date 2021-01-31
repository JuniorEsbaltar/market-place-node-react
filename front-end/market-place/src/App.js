import Routes from './routes'
import './styles/global.css'
import './App.css';

function App() {
  return (
    <div className="container">
       <header>
          <h1>Market Place</h1>
       </header>
       <aside>
          <p>Clientes</p>
          <p>Produtos</p>
          <p>Pedidos</p>
       </aside>
       <main>
         <div className="content">
            <Routes />
         </div>
       </main>
       {/* <footer>
          <p> Seja bem vindo e volte sempre!!</p>
       </footer> */}
    </div>
  );
}

export default App;
