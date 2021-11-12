import React from "react";
import Lista from "../Lista";
import ListaMC from "../ListaMC";

import { Recuadro1 } from "./ListasMC.styles";
//import Imagen1 from './imagen1.png';
//[[ID, {atributo: valor, atributo: valor, atributo: valor,}]]
const ListasMC = (props) => {
  return (
    <Recuadro1>
      {props.datos.map((cursoTemp) => {
        return <ListaMC curso={cursoTemp} key={cursoTemp[0]}/>;
      })}
    </Recuadro1>
  );
};

export default ListasMC;