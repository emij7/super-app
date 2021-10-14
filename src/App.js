import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import PaginaLogin from './pages/PaginaLogin';
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.css';
import Buscador from "./pages/Buscador";
import { UsuarioProvider } from "./context/UsuarioContext";
import MiEquipo from "./components/MiEquipo";

function App() {
  return (
    <BrowserRouter basename='/super-app'>
      <Layout>
        <UsuarioProvider>
          <Switch>
            <Route exact path='/miEquipo' component={MiEquipo} />
            <Route exact path='/busqueda' component={Buscador} />
            <Route path='/' component={PaginaLogin} />
          </Switch>
        </UsuarioProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
