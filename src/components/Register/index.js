

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

export default function Index(props) {
  const [shown, setShown] = React.useState(false);
  const [shown2, setShown2] = React.useState(false);
  const switchShown = () => setShown(!shown);
  const switchShown2 = () => setShown2(!shown2);

  const [username, cambiarUsuario] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [email, cambiarCorreo] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    username: /^[a-zA-Z ]{12,40}$/, // Letras, numeros, guion y guion_bajo
    password: /^[a-zA-Z0-9]{6,15}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      username.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      email.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarPassword({ campo: "", valido: null });
      cambiarPassword2({ campo: "", valido: "null" });
      cambiarCorreo({ campo: "", valido: null });
      
      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

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
              leyendaError="El correo solo puede contener letras, numeros, guiones, y puntos en el dominio."
              expresionRegular={expresiones.email}
            />
            
          </Div>
          <div className="row">
              {props.errorCorreo ? (
                <MensajeErrorEmail> Correo ya existente </MensajeErrorEmail>
              ) : null}
            </div>
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
            />
            <Div2>
              <IconEyes src={eyes} onClick={switchShown} />
            </Div2>
          </Div>
          <Div>
            <IconPasswd src={pass} />
            <Input
              estado={password2}
              cambiarEstado={cambiarPassword2}
              tipo={shown2 ? "text" : "password"}
              placeholder="Confirmar Contraseña"
              name="password2"
              leyendaError="Ambas contraseñas deben ser iguales."
              funcion={validarPassword2}
            />
            <Div2>
              <IconEyes src={eyes} onClick={switchShown2} />
            </Div2>
          </Div>
          {props.errorRegister ? (
            <MensajeError>
              <p>
                <b>Error:</b> Por favor completa el formulario correctamente.
              </p>
            </MensajeError>
          ):null}
          <ContenedorBotonCentrado>
            <Botom  type="submit">Registrarse</Botom>
            {formularioValido === true && (
              <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
            )}
          </ContenedorBotonCentrado>
        </FormularioR>
      </ContFormulario>
    </CuadroRegister>
  );
}
