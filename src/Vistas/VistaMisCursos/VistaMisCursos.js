import React, { useContext, useEffect, useState } from "react";
import Listas from "../../components/Listas";
import { AuthContext } from "../../Context";
import { apiSettings } from "../../services/services";
import { Contenedor, Texto, Texto2 } from "./VistaMisCursos.styles";
import { withRouter, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ListasMC from "../../components/ListasMC";

const VistaMisCursos = () => {
  const { currentUser } = useContext(AuthContext);

  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInscripciones = async () => {
    if (currentUser) {
      const temp = await apiSettings.getInscripciones(currentUser.uid);
      setCursos(temp);
    }
    console.log(cursos);
  };

  useEffect(() => {
    fetchInscripciones();
    const timeout = setTimeout(() => {
      setLoading(false);
      document.getElementById("este").click();
    }, 2500);

    return () => clearTimeout(timeout);
  }, [currentUser]);

  if (loading) {
    return <Contenedor></Contenedor>;
  }

  if (cursos.length === 0) {
    return (
      <Contenedor>
        <Texto>Todos mis cursos </Texto>
        <Texto2>No tienes cursos registrados </Texto2>
      </Contenedor>
    );
  } else {
    return (
      <Contenedor>
        <Texto>Todos mis cursos </Texto>
        <ListasMC datos={cursos} />
      </Contenedor>
    );
  }
};

export default VistaMisCursos;