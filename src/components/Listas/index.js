import React from "react";
import Lista from "../Lista";
import { Recuadro1 } from "./Listas.styles";
//import Imagen1 from './imagen1.png';
//[[ID, {atributo: valor, atributo: valor, atributo: valor,}]]
const Listas = (props) => {
  return (
    <Recuadro1>
      {props.datos.map((cursoTemp) => {
        return <Lista curso={cursoTemp} />;
      })}
    </Recuadro1>
  );
};

export default Listas;
