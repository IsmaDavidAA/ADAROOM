import React from "react";
import { apiSettings } from "../services/services";
import GeneralLink from "../components/SuscriberLink";
import { useHistory } from "react-router-dom";

const InscritoLink = ({
  inscrito,
  idCurso,
  idEst,
  modActionFirst,
  modACtionNext,
  modACtionFirstSuccess,
  modACtionNextSuccess,
}) => {
  const history = useHistory();
  const made = false;
  if (idEst === "") {
    return (
      <GeneralLink
        content={"Inscribirme ahora"}
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
          modActionFirst();
          const donePut = await apiSettings.putCurso(idCurso);
          const donePost = await apiSettings.postInscripcion(idCurso, idEst);
          modACtionNext();
          modACtionFirstSuccess();
        }}
        content={"Inscribirme ahora"}
        paramsLink={""}
        made={made}
      />
    );
  }
};
export default InscritoLink;