import React, { useContext, useEffect, useState } from "react";
import {
  Recuadro,
  ImagenL,
  AutorL,
  CantInsL,
  NombreIL,
  Texto,
  BarraEstado,
  Titulo,
} from "./ListaMC.styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Progressbar from "../../components/ProgressBar";
import { apiSettings } from "../../services/services";
import { AuthContext } from "../../Context";

const ListaMC = (props) => {
  const { currentUser } = useContext(AuthContext);
  const cantidad = props.curso[1].cantMaterial;
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    const fetchChecks = async () => {
      const Nchecks = await apiSettings.getCantChecks(
        props.curso[0],
        currentUser.uid
      );
      setChecks(Nchecks);
    };
    fetchChecks();
  }, [currentUser]);

  return (
    <Recuadro>
      <Link to={`/cursos/${props.curso[0]}`}>
        <ImagenL src={props.curso[1].imagen} />
      </Link>
      <Texto>
        <Link
          to={`/cursos/${props.curso[0]}`}
          style={{ textDecoration: "none" }}
        >
          <NombreIL>{props.curso[1].nombreCurso}</NombreIL>
        </Link>
        <AutorL>{props.curso[1].institucion}</AutorL>
        <CantInsL>{props.curso[1].cantInscritos} ya inscritos </CantInsL>
        <BarraEstado>Mi progreso</BarraEstado>
        <Progressbar progress={Math.trunc((checks / cantidad) * 100)} />
        <Titulo> EMPEZAR CURSO </Titulo>
      </Texto>
    </Recuadro>
  );
};
export default ListaMC;
