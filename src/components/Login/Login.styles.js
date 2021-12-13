import styled, { css } from "styled-components";

const colores = {
  borde: "#0075FF",
  error: "#f44336",
};

export const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

export const LeyendaError = styled.p`
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

export const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

export const MensajeError = styled.p`
  height: 20px;
  width: 360px;
  border-radius: 3px;
  font-size: 13px;
  color: ${colores.error};
  text-align: center;
  padding-bottom:10px;
  margin:0px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export const CuadroLogin = styled.div`
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
  font-weight: 600;
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
export const FormularioL = styled.form`
  display: block;
`;

export const InputContraseñaR = styled.input`
padding: 0px 0rem 0rem 10px;
margin-right: 6px;
display: block;
width:290px;
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
export const IconUser = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  margin: 7px;
  padding: 0px 0px 0px 0px;
`;
export const InputUserR = styled.input`
background: none;
display: block;
border: none;
width: 315px;
height: 55px;
padding: 0px 0rem 0rem 15px;
font-size: 20px;
font-family: "Segoe UI";
`;

