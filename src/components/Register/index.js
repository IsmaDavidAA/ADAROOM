import  React, {useContext} from 'react'
import { ContFormulario, Botom, CuadroRegister, MensajeError, FormularioR, InputUserR, InputContraseñaR, InputCorreoR, Titulo, Titulo2, Titulo3,  Div, IconUser, IconEmail, IconPasswd, IconEyes } from './Register.styles'

import email from  "../../images/email.png";
import password from "../../images/password.png";
import eyes from "../../images/ojo.png";
import userR from "../../images/IconoUsuario.png";
import {AuthContext} from "../../Context";
import { Redirect } from 'react-router';

const Index = (props) => {
  const [shown, setShown] = React.useState(false);
  const [shown2, setShown2] = React.useState(false);
  const switchShown = () => setShown(!shown);
  const switchShown2 = () => setShown2(!shown2);
    return (
        <CuadroRegister>
         <Titulo>¡Regístrate y comienza a aprender!</Titulo>
         <Titulo2>
         Por favor llene el siguiente formulario</Titulo2>
        

         <ContFormulario>
        <FormularioR onSubmit={props.handleRegister}>
        <Div>
            <IconUser src = {userR}/>
            <InputUserR name="username" type= "text" placeholder="Nombre Completo" required />
          </Div>

          <Div>
             <IconEmail src = {email}/> 
             <InputCorreoR name="email" type="email" placeholder="Correo electrónico" required  maxLength="30"  /> 
          </Div>
        <Div>
        <IconPasswd src = {password}/>
            <InputContraseñaR name="password"  type={shown ? 'text' : 'password'} placeholder="Contraseña" required  minlength="6" maxlength="15" />
            <IconEyes src = {eyes} onClick={switchShown}/>
        </Div>
        <Div>
        <IconPasswd src = {password} />
            <InputContraseñaR name="confirmacionPassword" type={shown2 ? 'text' : 'password'} placeholder="Confirmación de contraseña" required  minlength="6" maxlength="15" />
            <IconEyes src = {eyes} onClick={switchShown2}/>
        </Div>
        <div className="row">
      { 
        (props.errorRegister)
          ? <MensajeError> Correo ya existente </MensajeError> 
          : null 
      }
    </div>
          <Botom type="submit"> Registrarse </Botom>

         
        </FormularioR>
        </ContFormulario>
         <Titulo3> Todos los campos son obligatorios </Titulo3>
        </CuadroRegister>
    )
}

export default Index