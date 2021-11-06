import "./App.css";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import VistaHome from "./Vistas/VistaHome/VistaHome";
import VistaCurso from "./Vistas/VistaCurso/VistaCurso";
import VistaListaCursos from "./Vistas/VistaListaCursos/VistaListaCursos";
import PiePagina from "./components/PiePagina";
import { GlobalStyle } from "./GlobalStyle";
import { AuthProvider } from "./Context";
import SignIn from "./Vistas/VistaLogin/Login";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Menu />
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/" exact component={VistaHome} />
          <Route path="/cursos" exact component={VistaListaCursos} />
          <Route path="/cursos/:cursoId" exact component={VistaCurso} />
        </Switch>
        <PiePagina />
      </Router>
    </AuthProvider>
  );
}

export default App;
