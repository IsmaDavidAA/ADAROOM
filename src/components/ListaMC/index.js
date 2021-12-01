import React from "react";
import {
  Recuadro,
  ImagenL,
  AutorL,
  CantInsL,
  NombreIL,
  Texto,
  BarraEstado,
  Titulo,
} from "./ListaMC.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Progressbar from '../../components/ProgressBar'

const ListaMC = (props) => {
  const cantidad = props.curso[1].cantMaterial;
  var Nchecks; // == consulta Numero de secciones checkeadas  
  var porcentaje=50;  //aqui la operacion perteneciente a otra tarea 
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
        <CantInsL>{props.curso[1].cantInscritos} ya inscritos </CantInsL>
        <BarraEstado>Mi progreso</BarraEstado>
        <Progressbar progress={porcentaje}/> 
        <Titulo> EMPEZAR CURSO </Titulo>
      </Texto>
    </Recuadro>
  );
};

export default ListaMC;