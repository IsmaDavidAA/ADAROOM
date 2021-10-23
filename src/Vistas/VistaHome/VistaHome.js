import React, { useEffect, useState } from "react";
import { Contenedor, Coment, Coment1, MasCursos } from "./VistaHome.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Cuerpo from "../../components/Cuerpo";
import Mosaico from "../../components/Mosaico";
import { apiSettings } from "../../services/services";

const VistaHome = () => {
  const [cursos, setCursos] = useState([]);
  const [state, setState] = useState(false);

  const fetchCursos = async () => {
    if (!state) {
      const temp = await apiSettings.getTopCursos();

      setState(true);
      setCursos(temp);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, [cursos]);

  return (
    <>
      <Contenedor>
        <Cuerpo />
        <Coment>100% gratis</Coment>
        <Coment1>Comienza a aprender con cursos gratis</Coment1>
        <Mosaico datos={cursos} />
        <Link to={`/cursos`} style={{ textDecoration: "none" }}>
          <MasCursos>Explorar todos los cursos -{">"} </MasCursos>
        </Link> 
      </Contenedor>
   
    </>
  );
};
export default VistaHome;
