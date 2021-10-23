import styled from "styled-components";

export const Recuadro = styled.div`
  color: #000000;
  background: #fdfefe;
  border-bottom: #ccd1d1 2px solid;
  border-left: #ccd1d1 2px solid;
  border-right: #ccd1d1 2px solid;
  width: 345px;
  height: 485px;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 0rem 2rem;
  justify-content:space-between;
  
`;

export const Texto = styled.div`
  height: 200px;
  padding: 0px 3px 10px 3px;
  font-size:var(letraUltraPequenia);
`;

export const ImagenL = styled.img`
  width: 345px;
  height: 345px;
  border-bottom: #ccd1d1 2px solid;
`;

export const NombreIL = styled.p`
  font-weight: bold;
  color: #000000;
  margin: 12px 0px 0px 0px;
  
`;
export const AutorL = styled.p`

  color: gray;
  margin: 5px 0px;
  
`;
export const CantInsL = styled.p`
  margin: 5px 0px;
  font-weight: bold;
  
`;
