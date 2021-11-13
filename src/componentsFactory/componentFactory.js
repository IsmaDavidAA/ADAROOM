import React from "react";
import Contenidos from "../components/Contenido";
import ContenidosS from "../components/ContenidoS";

const ContentFactory = ({ inscrito, idEst, temas }) => {
  if (idEst === "") {
    return <Contenidos datos={temas} />;
  } else if (inscrito) {
    return <ContenidosS datos={temas} />; //modificar
  } else {
    return <Contenidos datos={temas} />;
  }
};
export default ContentFactory;
