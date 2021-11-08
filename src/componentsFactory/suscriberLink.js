import React from "react";
import { apiSettings } from "../services/services";
import GeneralLink from "../components/SuscriberLink";
import { useHistory } from "react-router-dom";

const InscritoLink = ({ inscrito, idCurso, idEst, modAction }) => {
  const history = useHistory();
  const made = false;
  if (idEst === "") {
    return (
      <GeneralLink
        content={"Inscribirme"}
        paramsLink={async () => {
          await apiSettings.putCurso(idCurso);
          await apiSettings.postInscripcion(idCurso, idEst);
        }}
        action={async () => {
          history.push("/login");
        }}
        made={made}
      />
    );
  } else if (inscrito) {
    return (
      <GeneralLink
        action={async () => {
          //consultas aqui
        }}
        content={"Baja"} //texto aqui
      />
    );
  } else {
    return (
      <GeneralLink
        action={async () => {
          modAction();
          await apiSettings.putCurso(idCurso);
          await apiSettings.postInscripcion(idCurso, idEst);
          // history.push("/cursos/");
        }}
        content={"Inscribirme"}
        paramsLink={""}
        made={made}
      />
    );
  }
};
export default InscritoLink;
