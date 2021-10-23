import React from "react";
import {
  Recuadro,
  ImagenL,
  AutorL,
  CantInsL,
  NombreIL,
  Texto,
} from "./Mosaico1.styles";
//import {
// BrowserRouter as Router,
// Switch,
// Route,
//Link,
//useRouteMatch,
//useParams,
//} from "react-router-dom";
//<Link to={`/cursos/${props.curso[0]}`}> imagen </Link>
const Mosaico1 = (props) => {
  return (
    <Recuadro>
      <ImagenL src={props.curso[1].imagen} />

      <Texto>
        <NombreIL>{props.curso[1].nombreCurso}</NombreIL>
        <AutorL>{props.curso[1].institucion}</AutorL>
        <CantInsL>{props.curso[1].cantInscritos} ya Inscritos </CantInsL>
      </Texto>
    </Recuadro>
  );
};

export default Mosaico1;
