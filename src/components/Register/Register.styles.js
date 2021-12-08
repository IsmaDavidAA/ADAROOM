import styled from "styled-components";


export const CuadroRegister = styled.div`
  min-height: 80vh;
  text-align: center;
  padding: 10rem 0rem 0rem 0rem;
  display: flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  `;
export const Titulo = styled.h3`
  margin:1rem 0rem 1rem 0rem;
  color: #1E3163;
   text-align: center;
   font-weight: 600;
   font-family: 'Segoe UI';
   font-size: 22px;
`;
export const Titulo2 = styled.p`
   margin: 1rem 0rem 1rem 0rem;
   text-align: center;
   font-family: 'Segoe UI';
   font-size: 22px; 
`;
export const ContFormulario = styled.div`
top: 20rem;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
   `;
export const FormularioR = styled.form`

display: block;

`;
export const InputCorreoR= styled.input`
background: none;
display: block;

border: none;
width: 325px;
height: 55px;
padding: 0px 0rem 0rem 15px;
font-size: 20px;
font-family: 'Segoe UI';
`;
export const InputContraseñaR = styled.input`
padding: 0px 0rem 0rem 15px;
display: block;
width: 325px;
height: 55px;
font-size: 20px;
font-family: 'Segoe UI';
background: none;
border: none;
`;
export const Botom = styled.button`
text-align: center;

margin: 0px 0rem 0rem 0rem;
width: 360px;
height: 55px;
background: #0061A8;
display: block;
color: #ffffff;
font-size: 20px;
border: none;
`;
export const IconEmail = styled.img`
width:16px;
height: 16px;
align-self:center;
justify-self:center;
margin: 10px;
padding:0px 0px 0px 0px;
`;
export const IconPasswd = styled.img`
width: 16px;
height: 16px;
align-self:center;
justify-self:center;
margin: 10px;
padding:0px 0px 0px 0px;
`;
export const IconEyes = styled.img`
width: 16px;
height: 16px;
align-self:center;
justify-self:center;
margin: 5px;
padding:0px 10px 0px 0px;
`;
export const Div = styled.div`
margin: 1rem 0rem 2rem 0rem;
width: 360px;
height: 55px;
border:1px solid #aaa;
display: flex;
`;
export const Titulo3 = styled.h4`
margin:1rem 0rem 1rem 0rem;
  color: #F44336;
   text-align: center;
   font-weight: 600;
   font-family: 'Segoe UI';
   font-size: 22px;
`;
export const IconUser = styled.img`
width:16px;
height: 16px;
align-self:center;
justify-self:center;
margin: 10px;
padding:0px 0px 0px 0px;
`;
export const InputUserR = styled.input`
padding: 0px 0rem 0rem 15px;
display: block;
width: 325px;
height: 55px;
font-size: 20px;
font-family: 'Segoe UI';
background: none;
border: none;
`;

export const MensajeError = styled.p`
font-size: 18px;
font-weight: bold;
color: "#F44336"
`;