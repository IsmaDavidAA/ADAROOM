import React from "react";
import {
  ContFormulario,
  Boton,
  CuadroLogin,
  Formulario,
  InputContraseña,
  InputCorreo,
  Titulo,
  Titulo2,
  Div,
  IconEmail,
  IconPasswd,
  IconEyes,
} from "./SignIn.Styled";

import email from "../../images/email.png";
import password from "../../images/password.png";
import eyes from "../../images/ojo.png";

const Index = (props) => {
  const [shown, setShown] = React.useState(false);
  const switchShown = () => setShown(!shown);
  return (
    <CuadroLogin>
      <Titulo>¡Inicia sesión con tu cuenta de AdaRoom!</Titulo>
      <Titulo2>
        Por favor llene el siguiente formulario para <br />
        validar su ingreso
      </Titulo2>

      <ContFormulario>
        <Formulario onSubmit={props.handleLogin}>
          <Div>
            <IconEmail src={email} />
            <InputCorreo
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
              maxLength="40"
            />
          </Div>
          <Div>
            <IconPasswd src={password} />
              <InputContraseña
                name="password" 
                type={shown ? 'text' : 'password'}
                placeholder="Contraseña"
                required
                maxLength="40"
              />
            <IconEyes src = {eyes} onClick={switchShown} />
          </Div>

          <Boton type="submit"> Iniciar Sesión </Boton>
        </Formulario>
      </ContFormulario>
    </CuadroLogin>
  );
};

export default Index;
