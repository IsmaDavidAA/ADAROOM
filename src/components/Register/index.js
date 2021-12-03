import  React, {useContext} from 'react'
import { ContFormulario, Botom, CuadroRegister, FormularioR, InputUser, InputContraseñaR, InputCorreoR, Titulo, Titulo2, Titulo3,  Div, IconUser, IconEmail, IconPasswd } from './Register.styles'

import email from  "../../images/email.png";
import password from "../../images/password.png";
import user from "../../images/user.png"
import {AuthContext} from "../../Context";
import { Redirect } from 'react-router';

const Index = (props) => {
   
    return (
        <CuadroRegister>
         <Titulo>¡Regístrate y comienza a aprender!</Titulo>
         <Titulo2>
         Por favor llene el siguiente formulario</Titulo2>
        

         <ContFormulario>
        <FormularioR onSubmit={props.handleRegister}>
        <Div>
            <IconUser src = {user}/>
            <InputUser name="username" type= "text" placeholder="Nombre Completo" required maxLength= "40"/>

        </Div>
          <Div>
             <IconEmail src = {email}/> 
             <InputCorreoR   name="email" type="email" placeholder="Correo electrónico" required  maxLength="40"  /> 
          </Div>
        <Div>
        <IconPasswd src = {password}/>
            <InputContraseñaR name="password"  type="password" placeholder="Contraseña" required  maxLength="40" />
        </Div>
       

          <Botom type="submit"> Registrarse </Botom>

         
        </FormularioR>
        </ContFormulario>
         <Titulo3> Todos los campos son obligatorios </Titulo3>
        </CuadroRegister>
    )
}

export default Index