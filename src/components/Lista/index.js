import React from "react";
import {
  Recuadro,
  ImagenL,
  AutorL,
  CantInsL,
  NombreIL,
  Texto,
} from "./Lista.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
const Lista = (props) => {
  return (
    <Recuadro>
      <Link to={`/cursos/${props.curso[0]}`}>
        <ImagenL src={props.curso[1].imagen} />
      </Link>
      <Texto>
        <Link
          to={`/cursos/${props.curso[0]}`}
          style={{ textDecoration: "none" }}
        >
          <NombreIL>{props.curso[1].nombreCurso}</NombreIL>
        </Link>
        <AutorL>{props.curso[1].institucion}</AutorL>
        <CantInsL>{props.curso[1].cantInscritos} ya Inscritos </CantInsL>
      </Texto>
    </Recuadro>
  );
};

export default Lista;
