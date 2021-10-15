import React from "react";
import { Recuadro , ImagenL, AutorL, CantInsL} from './Lista.styles';
const Lista = ({ imagen, nombre, autor, cantIns }) => {
  return (
    <Recuadro>
      <ImagenL src={imagen}/>
      <AutorL>{nombre}</AutorL>
      <AutorL>{autor}</AutorL>
      <CantInsL>{cantIns}</CantInsL>
    </Recuadro>
  );
};

export default Lista;
