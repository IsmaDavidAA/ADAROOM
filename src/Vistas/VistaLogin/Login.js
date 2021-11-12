import React, {useCallback, useContext} from 'react';


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
      
      try {
        await 
          signInWithEmailAndPassword(auth,email.value, password.value);
        history.push("/");
      } catch (error) {
      alert(error);
        }
    
    },
    [history]
  );
   // const {currentUser} = useContext(AuthContext);
    // if (currentUser){
    //   return <Redirect to ="/" />;
    // }
    return (
      <Index handleLogin = {handleLogin} />

  );
};

export default SignIn;