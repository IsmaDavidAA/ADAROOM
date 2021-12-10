

import React, { useState,useContext } from "react";
import {AuthContext} from "../../Context";
import { Redirect } from 'react-router';

import {
  ContenedorBotonCentrado,
  MensajeExito,
  MensajeError,

  Botom,
  Div,
  Titulo,
  Titulo2,
  FormularioR,
  CuadroRegister,
  ContFormulario,
  IconEyes,
  IconPasswd,
  IconUser,
  IconEmail,
  Div2,
  Titulo3,
  MensajeErrorEmail,
} from "./Register.styles";

import Input from "./Input";
import correo from  "../../images/email.png";
import pass from "../../images/password.png";
import eyes from "../../images/ojo.png";
import userR from "../../images/IconoUsuario.png";

const Index = (props) => {
  
  const [shown, setShown] = React.useState(false);
  const [shown2, setShown2] = React.useState(false);
  const switchShown = () => setShown(!shown);
  const switchShown2 = () => setShown2(!shown2);

  const [username, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [email, cambiarCorreo] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  console.log(props);
  const expresiones = {
    username: /^[a-zA-Z]{12,40}$/, 
    password: /^[a-zA-Z0-9]{6,15}$/, 
    email: /^[a-zA-Z0-9_]+@[a-z]+\.[a-z.]+$/,
  };


  const validarNombre =() => {
    if (username.campo.length > 11 && username.campo.length < 41 ) {
      cambiarUsuario((prevState) => {
        return { ...prevState, valido: "true" };
      });
    } else {
      cambiarUsuario((prevState) => {
        return { ...prevState, valido: "false" };
    });
  }
};

const validarPassword =() => {
  if (password.campo.length > 5 && password.campo.length < 16 ) {
    cambiarPassword((prevState) => {
      return { ...prevState, valido: "true" };
    });
  } else {
    cambiarPassword((prevState) => {
      return { ...prevState, valido: "false" };
  });
}
};

console.log("name")
console.log(username.campo)
console.log(username.valido)
console.log("correo")
console.log(email.valido)
console.log("contra")
console.log(password.valido)


   const handleRegister = (e) => {
    e.preventDefault();

    if (
      
      username.valido === "true" &&
      password.valido === "true" &&
      email.valido === "true"

    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });    
      cambiarPassword({ campo: "", valido: ""});        
      cambiarCorreo({ campo: "", valido: "" });
      
      // ...
    } else {
      //alert('llena el formulario correctamente');
      cambiarFormularioValido(false);
    }
  };


  let nombrer = username.campo
  let correor = email.campo
  let contrasenia = password.campo



  return (
    <CuadroRegister>
      <Titulo>¡Regístrate y comienza a aprender!</Titulo>
      <Titulo2>Por favor llene el siguiente formulario</Titulo2>
      <Titulo3>Todos los campos son obligatorios</Titulo3>
      <ContFormulario>
        <FormularioR action='' onSubmit={props.handleRegister} >
          <Div>
            <IconUser src={userR} />
            <Input
              funcion={validarNombre}
              estado={username}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              placeholder="Nombre Completo"
              name="username"
              leyendaError="El campo Nombre completo permite caracteres de Aa-Zz y debe tener entre 12 y 40 caracteres. "
              expresionRegular={expresiones.username}
            />
          </Div>
          <Div>
            <IconEmail src={correo} />
            <Input
              estado={email}
              cambiarEstado={cambiarCorreo}
              tipo="email"
              placeholder="Correo electrónico"
              name="email"
              leyendaError="El correo solo puede contener letras, numeros, barra baja, @ y puntos en el dominio."
              expresionRegular={expresiones.email}
            />
            
          </Div>


          <Div>
            <IconPasswd src={pass} />
            <Input
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo={shown ? "text" : "password"}
              placeholder="Contraseña"
              name="password"
              leyendaError="La contraseña  permite caracteres de Aa-Zz, números y debe tener entre 6 y 15 caracteres."
              expresionRegular={expresiones.password}
              funcion={validarPassword}

            />
            <Div2>
              <IconEyes src={eyes} onClick={switchShown} />
            </Div2>
          </Div>
                    

          <div className="row">
              {props.errorRegister ? (
                <MensajeError>
                <p>  
                  Por favor rellena el formulario correctamente.
                </p>
              </MensajeError>
              ) : null}
            </div>

          <ContenedorBotonCentrado>
          {formularioValido === false && (
              <MensajeError>
              <p>  
                Por favor rellena el formulario correctamente ERROR.
              </p>
            </MensajeError>
            )}
            {formularioValido === true && (
              <MensajeExito>Enviando formulario a la DB</MensajeExito>
            )}

            <Botom type="submit">Registrarse</Botom>
          </ContenedorBotonCentrado>
        </FormularioR>
      </ContFormulario>
    </CuadroRegister>
  );
}

export default Index;