import React, {useCallback, useContext,useState} from 'react';
//import { FirebaseAuth } from "react-firebaseui";
import  {auth} from "../../services/firebase"
import { AuthContext } from "../../Context";
import { withRouter, Redirect } from "react-router-dom";
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "@firebase/auth";
import Index from '../../components/Register/index';
import {apiSettings} from '../../services/services';


const VistaRegistro = ({history}) => {
  //Obtenemos el estado del user en el context
  const [errorRegister,seterrorRegister] =useState(false)
  const [errorCorreo,seterrorCorreo] =useState(false)
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  console.log("estamos")
   const handleRegister = useCallback(
    async event => {
      event.preventDefault();
      const { email, password,username} = event.target.elements;
      console.log("estamos")
      console.log(email.value)
      console.log(password.value)
     


      try {
        const Usuario = await createUserWithEmailAndPassword(auth,email.value, password.value);
        apiSettings.setUser(username.value,email.value,password.value,Usuario.user.uid);
        history.push("/");
        console.log(AuthContext);
        
      } catch (error) {
        
      //alert('El correo ya existe');
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