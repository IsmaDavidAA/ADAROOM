import React from "react";
import ada from "../../images/logoADAROOM.jpg";
import {
  MenuEstilo,
  ImagenEstilo,
  InicioEstilo,
  CursoEstilo,
} from "./Menu.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function Menu() {
  return (
    <MenuEstilo>
      <Link to={`/`}>
        <ImagenEstilo  src={ada} />
      </Link>
      <Link to={`/`}>
      <InicioEstilo > INICIO</InicioEstilo>
      </Link>
      <Link to={`/cursos`}>
      <CursoEstilo > CURSOS</CursoEstilo>
      </Link>
    </MenuEstilo>

  );
}
export default Menu;
