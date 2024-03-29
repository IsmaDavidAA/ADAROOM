import "./App.css";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import VistaHome from "./Vistas/VistaHome/VistaHome";
import VistaCurso from "./Vistas/VistaCurso/VistaCurso";
import VistaListaCursos from "./Vistas/VistaListaCursos/VistaListaCursos";
import PiePagina from "./components/PiePagina";
import { GlobalStyle } from "./GlobalStyle";
import { AuthProvider } from "./Context";
import SignIn from "./Vistas/VistaLogin/Login";
import VistaRegistro from "./Vistas/VistaRegistro/VistaRegistro"

import VistaMisCursos from "./Vistas/VistaMisCursos/VistaMisCursos";

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

          <Route path="/MisCursos" exact component={VistaMisCursos} />
          <Route path="/Registro" exact component={VistaRegistro} />

          <Redirect path="/" exact component={VistaHome} />
        </Switch>
        <PiePagina />
      </Router>
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
