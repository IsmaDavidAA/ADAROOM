import react from "react";
import { Contenedor, Titulo, Descrip } from "./Descripcion.styles";

const Descripcion = ({ descripcion }) => {
  return (
    <Contenedor>
      <Titulo>Descripcion del curso</Titulo>
      <Descrip>
      <p>{descripcion}</p>
      </Descrip>
    </Contenedor>
  );
};

export default Descripcion;
