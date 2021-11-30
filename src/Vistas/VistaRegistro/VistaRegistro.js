import React, { useContext, useEffect, useState } from "react";
import Listas from "../../components/Listas";
import { AuthContext } from "../../Context";
import { apiSettings } from "../../services/services";
import { Contenedor, Texto } from "./VistaRegistro.styles";
import { withRouter, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ListasMC from "../../components/ListasMC";
import VistaHome from "../VistaHome/VistaHome";
import Index from '../../components/Register/index';
const VistaRegistro = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);


  if (loading) {
    return <Contenedor></Contenedor>;
  }
  if(!currentUser){
    return <Redirect path="/" exact component={VistaHome} />;
  }
  else {
    return (
      <Index/>
    );
  }
};
export default VistaRegistro;