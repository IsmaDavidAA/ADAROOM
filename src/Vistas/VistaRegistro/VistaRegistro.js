import React, {useCallback, useContext,useState} from 'react';
//import { FirebaseAuth } from "react-firebaseui";
import  {auth} from "../../services/firebase"
import { AuthContext } from "../../Context";
import { withRouter, Redirect } from "react-router-dom";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "@firebase/auth";
import Index from '../../components/Register/index';
import {apiSettings} from '../../services/services';

const VistaRegistro = ({history}) => {
  //Obtenemos el estado del user en el context
  const [errorRegister,seterrorRegister] =useState(false)
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
   const handleRegister = useCallback(
    async event => {
      event.preventDefault();
      const { email, password1 ,password2,username} = event.target.elements;

      console.log(email.value)

      try {
        if(password1.value === password2.value){
        const Usuario = await createUserWithEmailAndPassword(auth,email.value, password1.value);
        apiSettings.setUser(username.value,email.value,password1.value,Usuario.user.uid);
        history.push("/");
        console.log(AuthContext);
        }
        else{
          console.log("no da distin")
        }
      } catch (error) {
        
    // alert('Acceso inválido. Por favor intente de nuevo');
        seterrorRegister(true)
        }
    },
    [history]
  );
    
    if (currentUser){
      return <Redirect to ="/" />;
    }
    return (

      <Index handleRegister={handleRegister} errorRegister={errorRegister}/>
     
  );
};

export default VistaRegistro;