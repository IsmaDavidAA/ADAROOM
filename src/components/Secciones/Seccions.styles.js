import styled from "styled-components";
export const Seccions = styled.div`
  display: block;
  text-align: left;
  padding-left: 1rem;
  background: #ebf3ff;
  width: 100%;
  font-size: var(--letraEstandar);
  font-weight: bold;
  color: #000000;
  list-style: none;
  border: 1px solid #8ab6d6;
  @media only screen and (max-width: 700px) {
    padding: 0px 0px 0px 10px;
    flex-direction: column;
  }
`;

export const Caja = styled.div`
  padding: 0rem 5rem 5rem 6rem;
  width: 100%;
  @media only screen and (max-width: 700px) {
    margin: 0px 0px 0px 0px;
    padding: 0px 10px 25px 10px;
    flex-direction: column;
  }
`;

export const Seccion = styled.div`
  min-height: 71px;
  display: flex;
  width: 100%;
  align-items: left;
  padding-left: 2rem;
  padding-right: 0.5rem;
  @media only screen and (max-width: 700px) {
    padding: 0px 0px 0px 0px;
  }
`;
