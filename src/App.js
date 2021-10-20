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
function App() {
  return (
    <Router>
      <>
        <Menu />
        <Switch>
          <Route path="/cursos/:cursoId" component={VistaCurso} />
          <Route path="/cursos">
            <VistaListaCursos />
          </Route>
          <Route path="/">
            <VistaHome />
          </Route>
        </Switch>
        <PiePagina />
      </>
    </Router>
  );
}

export default App;
