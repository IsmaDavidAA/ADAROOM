import React, {useCallback, useContext} from 'react';

//import { FirebaseAuth } from "react-firebaseui";

import  {auth} from "../../services/firebase"
import { AuthContext } from "../../Context";
import { withRouter, Redirect } from "react-router-dom";
import {signInWithEmailAndPassword} from "@firebase/auth";
import Index from '../../components/SignIn/Index';


const SignIn = ({history}) => {
  //Obtenemos el estado del user en el context
   const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      console.log(email.value)

      try {
        await 
          signInWithEmailAndPassword(auth,email.value, password.value);
        history.push("/");
        console.log(AuthContext);
        
      } catch (error) {
      alert('Acceso inválido.Por favor intente de nuevo');
        }
    },
    [history]
  );
    const {currentUser} = useContext(AuthContext);
    if (currentUser){
      return <Redirect to ="/" />;
    }
    return (

      <Index handleLogin={handleLogin}/>
     
  );
};

export default SignIn;
