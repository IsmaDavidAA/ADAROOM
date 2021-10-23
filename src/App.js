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
function App() {
  return (
    <Router>
      <>
        <Menu />
        <Switch>
          <Route path="/cursos/:cursoId" component={VistaCurso} />
          <Route path="/" exact>
            <VistaHome />
          </Route>

          <Route path="/cursos" exact>
            <VistaListaCursos />
          </Route>
        </Switch>
        <PiePagina />
      </>
      <GlobalStyle />
    </Router>
  );
}

export default App;
