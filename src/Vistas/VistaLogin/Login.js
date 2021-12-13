import React, {useCallback, useContext, useState} from 'react';
import  {auth} from "../../services/firebase"
import { AuthContext } from "../../Context";
import { withRouter, Redirect } from "react-router-dom";
import {signInWithEmailAndPassword} from "@firebase/auth";
import Index from '../../components/Login/index';


const SignIn = ({history}) => {
  const [errorLoginn,seterrorLoginn] =useState(false);
  const handleLoginn = useCallback(
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
        seterrorLoginn(true);
        }
    },
    [history]
  );
    const {currentUser} = useContext(AuthContext);
    if (currentUser){
      return <Redirect to ="/" />;
    }
    return (

      <Index handleLoginn={handleLoginn} errorLoginn={errorLoginn}/>
     
  );
};

export default SignIn;
