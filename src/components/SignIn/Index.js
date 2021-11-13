import  React, {useContext} from 'react'
import { ContFormulario, Boton, CuadroLogin, Formulario, InputContraseña, InputCorreo, Titulo, Titulo2, Div, IconUser, IconEmail, IconPasswd } from './SignIn.Styled'

import email from  "../../images/email.png";
import password from "../../images/password.png";
import {AuthContext} from "../../Context";
import { Redirect } from 'react-router';

const Index = (props) => {
   
    return (
        <CuadroLogin>
         <Titulo>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡Inicia sesión con tu cuenta de AdaRoom!</Titulo>
         <Titulo2>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por favor llene el siguiente formulario para <br/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validar su ingreso
         </Titulo2>
        

         <ContFormulario>
        <Formulario onSubmit={props.handleLogin}>
          <Div>
             <IconEmail src = {email}/> 
             <InputCorreo   name="email" type="email" placeholder="Correo electrónico" required  maxLength="40"  /> 
          </Div>
        <Div>
        <IconPasswd src = {password}/>
            <InputContraseña name="password"  type="password" placeholder="Contraseña" required  maxLength="40" />
        </Div>

          <Boton type="submit"> Iniciar Sesión </Boton>

         
        </Formulario>
        </ContFormulario>
        
        </CuadroLogin>
    )
}

export default Index
