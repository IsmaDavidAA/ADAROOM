import React from "react";
import {
  Contenedor,
  Recuadro,
  ImagenL,
  AutorL,
  CantInsL,
  NombreIL,
  Texto,
} from "./Mosaico.styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Mosaico = (props) => {
  return (
    <Contenedor>
      {props.datos.map((cursoTemp) => {
        return (
          <Recuadro>
            <Link to={`/cursos/${cursoTemp[0]}`}>
              <ImagenL src={cursoTemp[1].imagen} />
            </Link>

            <Texto>
              <Link
                to={`/cursos/${cursoTemp[0]}`}
                style={{ textDecoration: "none" }}
              >
                <NombreIL>{cursoTemp[1].nombreCurso}</NombreIL>
              </Link>
              <AutorL>{cursoTemp[1].institucion}</AutorL>
              <CantInsL>{cursoTemp[1].cantInscritos} ya inscritos </CantInsL>
            </Texto>
          </Recuadro>
        );
      })}
    </Contenedor>
  );
};

export default Mosaico;
