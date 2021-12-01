import React, { useContext, useEffect, useState ,useCallback} from "react";
import Listas from "../../components/Listas";
import { AuthContext } from "../../Context";
import { apiSettings } from "../../services/services";
import { Contenedor, Texto } from "./VistaRegistro.styles";
import { withRouter, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ListasMC from "../../components/ListasMC";
import  {auth} from "../../services/firebase";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import VistaHome from "../VistaHome/VistaHome";
import Index from '../../components/Register/index';

const VistaRegistro = ({history}) => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const handleRegister = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      console.log(email.value)
      console.log(password.value)

      try {
        await 
        createUserWithEmailAndPassword(auth,email.value, password.value);
        history.push("/");
        console.log(AuthContext);
        
      } catch (error) {
       alert('Acceso inválido. Por favor intente de nuevo');
        }
    },
    [history]
  );


  if (loading) {
    return <Contenedor></Contenedor>;
  }
  if(currentUser){
    return <Redirect path="/" exact component={VistaHome} />;
  }
  else {
    return (
      <Index handleRegister={handleRegister}/>
    );
  }
};
export default VistaRegistro;