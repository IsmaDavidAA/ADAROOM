import React, { useState,useContext } from "react";
import {AuthContext} from "../../Context";
import { Redirect } from 'react-router';

import {
  ContenedorBotonCentrado,
  MensajeError,
  Botom,
  Div,
  Titulo,
  Titulo2,
  FormularioL,
  CuadroLogin,
  ContFormulario,
  IconEyes,
  IconPasswd,
  IconEmail,
  Div2,
} from "./Login.styles";

import Input from "./Input";
import correo from  "../../images/email.png";
import pass from "../../images/password.png";
import eyes from "../../images/ojo.png";
import Input2 from "./Input2"
const Index = (props) => {
  
  const [shown, setShown] = React.useState(false);
  const switchShown = () => setShown(!shown);

  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [email, cambiarCorreo] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  console.log(props);
  const expresiones = { 
    password: /^[a-zA-Z0-9]{1,50}$/,
    email: /^(([A-Za-z0-9_])+(@[a-zA-Z]+[a-zA-Z][\.]){1,2}[a-zA-Z]{2,4}([\.][a-zA-Z]{2})?)$/,
  };

  const handleLoginn = (e) => {
    e.preventDefault();
      if (password.valido === "true" && email.valido === "true") {
        cambiarFormularioValido(true);
      } else {
        cambiarFormularioValido(false);
      }
  };

  return (
    <CuadroLogin>
      <Titulo>¡Inicia sesión con tu cuenta de AdaRoom!</Titulo>
      <Titulo2>Por favor llene el siguiente formulario para <br></br> validar su ingreso</Titulo2>
      <ContFormulario>
        <FormularioL action='' onSubmit={password.valido === "true" && email.valido === "true" ?props.handleLoginn:handleLoginn } >
          <Div>
            <IconEmail src={correo} />
            <Input
              estado={email}
              cambiarEstado={cambiarCorreo}
              placeholder="Correo electrónico"
              name="email"
              expresionRegular={expresiones.email}
            />
          </Div>

          <Div>
            <IconPasswd src={pass} />
            <Input2
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo={shown ? "text" : "password"}
              placeholder="Contraseña"
              name="password"
              expresionRegular={expresiones.password}
            />
            <Div2>
              <IconEyes src={eyes} onClick={switchShown} />
            </Div2>
          </Div>

          <div className="row">
              {props.errorLoginn ? (
                <MensajeError>
                <p>  
                Acceso inválido. Por favor intente de nuevo
                </p>
              </MensajeError>
              ) : null}
            </div>

          <ContenedorBotonCentrado>
          {formularioValido === false && (
              <MensajeError>
              <p>  
                Complete los campos del formulario correctamente.
              </p>
            </MensajeError>
            )}
            
            <Botom type="submit">Iniciar Sesión</Botom>
          </ContenedorBotonCentrado>
        </FormularioL>
      </ContFormulario>
    </CuadroLogin>
  );
}

export default Index;