import styled from "styled-components";

export const CuadroLogin = styled.div`
  min-height: 80vh;
  text-align: center;
  padding: 7rem 0rem 3rem 0rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 750px) {
    padding: 7rem 1rem 3rem 1rem;
  }
`;
export const Titulo = styled.h3`
  padding: 0.3rem 0rem 0rem 0rem;
  color: #1e3163;
  text-align: center;
  font-weight: 600;
  font-family: "Segoe UI";
  font-size: 22px;
`;
export const Titulo2 = styled.p`
  padding: 0.3rem 0rem 0.3rem 0rem;
  text-align: center;
  font-family: "Segoe UI";
  font-size: 22px;
`;
export const ContFormulario = styled.div`
  display: flex;
`;
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 220px;
`;
export const InputCorreo = styled.input`
  background: none;
  display: block;

  border: none;
  width: 325px;
  height: 55px;
  padding: 0px 0rem 0rem 15px;
  font-size: 20px;
  font-family: "Segoe UI";
`;
export const InputContraseña = styled.input`
  padding: 0px 0rem 0rem 15px;
  display: block;
  width: 325px;
  height: 55px;
  font-size: 20px;
  font-family: "Segoe UI";
  background: none;
  border: none;
`;
export const Boton = styled.button`
  text-align: center;
  width: 350px;
  height: 55px;
  background: #0061a8;
  display: block;
  color: #ffffff;
  font-size: 20px;
  border: none;
`;
export const IconEmail = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  padding: 0px 0px 0px 10px;
`;
export const IconPasswd = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  justify-self: center;
  padding: 0px 0px 0px 10px;
`;
export const Div = styled.div`
  width: 350px;
  height: 55px;
  border: 1px solid #aaa;
  display: flex;
`;
