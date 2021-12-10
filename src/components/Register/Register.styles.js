import styled, { css } from "styled-components";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: -30px;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const ContenedorTerminos = styled.div`
  grid-column: span 2;

  input {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = styled.p`
  height: 20px;
  width: 360px;
  border-radius: 3px;
  font-size: 13px;
  color: #f44336;
  text-align: center;
  padding-bottom:10px;
  padding-top: 10px;
  margin:0px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;
// =======================================

export const CuadroRegister = styled.div`
  text-align: left;
  padding: 8.5rem 0rem 10rem 0rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Titulo = styled.p`
  color: #1e3163;
  text-align: center;
  font-weight: bold;
  font-family: "Segoe UI";
  font-size: 22px;
  margin: 0px;
`;
export const Titulo2 = styled.p`
  text-align: center;
  font-family: "Segoe UI";
  font-size: 22px;
  color: #000000;
  margin: 15px;
`;
export const ContFormulario = styled.div`
  top: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const FormularioR = styled.form`
  display: block;
`;
export const InputCorreoR = styled.input`
  background: none;
  display: block;
  border: none;
  width: 325px;
  height: 55px;
  padding: 0px 0rem 0rem 15px;
  font-size: 20px;
  font-family: "Segoe UI";
`;
export const InputContraseñaR = styled.input`
  padding: 0px 0rem 0rem 15px;
  display: block;
  width: 325px;
  height: 55px;
  font-size: 20px;
  font-family: "Segoe UI";
  background: none;
  border: none;
`;
export const Botom = styled.button`
  text-align: center;
  width: 360px;
  height: 55px;
  background: #0061a8;
  display: block;
  color: #ffffff;
  font-size: 20px;
  border: none;  
  padding: 0px 0px 0px 0px;
  cursor: pointer;
`;
export const IconEmail = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  margin: 7px;
  padding: 0px 0px 0px 0px;
`;
export const IconPasswd = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  margin: 7px;
  padding: 0px 0px 0px 0px;
`;
export const IconEyes = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  margin: 1px;
  padding: 0px 0px 0px 0px;
`;
export const Div = styled.div`
  margin: 1rem 0rem 2rem 0rem;
  width: 360px;
  height: 55px;
  border: 1px solid #aaa;
  display: flex;
`;
export const Div2 = styled.div`
  margin: 0px;
  width: 360px;
  height: 55px;
  border: 0px;
  display: flex;
`;
export const Titulo3 = styled.p`
  margin: 0rem 0rem 0rem 0rem;
  color: #f44336;
  text-align: left;
  font-size: 16px;
  
`;
export const IconUser = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  margin: 7px;
  padding: 0px 0px 0px 0px;
`;
export const InputUserR = styled.input`
  padding: 0px 0rem 0rem 10px;
  margin: 0px;
  display: block;
  width: 301px;
  height: 55px;
  font-size: 20px;
  font-family: "Segoe UI";
  background: none;
  border: none;
`;
export const MensajeErrorEmail = styled.p`
font-size: 18px;
font-weight: bold;
	color: ${colores.error};
   
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
};
