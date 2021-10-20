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
      <ImagenEstilo src={ada} />
      <InicioEstilo> INICIO</InicioEstilo>

      <CursoEstilo href=""> CURSOS</CursoEstilo>
    </MenuEstilo>
  );
}
export default Menu;
