import React from "react";
import { apiSettings } from "../services/services";
import GeneralLink from "../components/SuscriberLink";

const InscritoLink = ({ loggedIn, inscrito, idCurso, idEst }) => {
  if (!loggedIn) {
    return (
      <GeneralLink
        link={`/login`}
        content={"Inscribirme"}
        paramsLink={() => {
          apiSettings.putCurso(idCurso);
          apiSettings.postInscripcion(idCurso, idEst);
          console.log("en accion");
        }}
      />
    );
  } else if (inscrito) {
    return (
      <GeneralLink
        link={`/cursos`} //ruta aqui
        action={() => {
          //consultas aqui
        }}
        content={"Baja"} //texto aqui
      />
    );
  } else {
    return (
      <GeneralLink
        link={`/cursos`}
        action={() => {
          apiSettings.putCurso(idCurso);
          apiSettings.postInscripcion(idCurso, idEst);
        }}
        content={"Inscribirme"}
        paramsLink={""}
      />
    );
  }
};
export default InscritoLink;
