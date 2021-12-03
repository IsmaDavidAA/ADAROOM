import React, {useCallback, useContext} from 'react';

//import { FirebaseAuth } from "react-firebaseui";
import { apiSettings } from '../../services/services';
import  {auth} from "../../services/firebase"
import { AuthContext } from "../../Context";
import { withRouter, Redirect } from "react-router-dom";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "@firebase/auth";
import Index from '../../components/Register/index';


const SignIn = ({history}) => {
  //Obtenemos el estado del user en el context
   const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password ,username} = event.target.elements;

      try {
      const newUser =  await createUserWithEmailAndPassword(auth,email.value, password.value);
          apiSettings.setUser(username.value,email.value,password.value,newUser.user.uid);
        history.push("/");
        console.log(AuthContext);
        
      } catch (error) {
      alert('Acceso inválido. Por favor intente de nuevo');
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
