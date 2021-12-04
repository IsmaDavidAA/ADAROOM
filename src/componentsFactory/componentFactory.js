import React from "react";
import Contenidos from "../components/Contenido";
import ContenidosS from "../components/ContenidoS";

const ContentFactory = ({ inscrito, idEst, temas, user }) => {
  if (idEst === "") {
    return <Contenidos datos={temas} />;
  } else if (inscrito) {
    return <ContenidosS datos={temas} user={user} />; //modificar
  } else {
    return <Contenidos datos={temas} />;
  }
};
export default ContentFactory;
