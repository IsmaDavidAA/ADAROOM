import React from "react";
import {
  Recuadro,
  ImagenL,
  AutorL,
  CantInsL,
  NombreIL,
  Texto,
  BarraEstado,
} from "./ListaMC.styles";
import {
  BrowserRouter as 
  Link,
} from "react-router-dom";

import Progressbar from '../../components/ProgressBar'

const ListaMC = (props) => {
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
        <Progressbar progress={'30'}/> 
        <p>EMPEZAR CURSO</p>
      </Texto>
    </Recuadro>
  );
};

export default ListaMC;