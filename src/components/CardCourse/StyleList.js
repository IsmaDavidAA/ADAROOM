import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  margin: 11rem 0rem 2rem 6rem;
  padding: 0rem 2rem 0rem 0rem;
  font-size: var(--letraEstandar);
`;
export const CardContainer = styled.div`
  padding: 0px 15px 0px 15px;
  min-width: 700px;
  display: flex;
  flex-direction: column;
`;
export const ImageC = styled.img`
  max-width: 300px;
  min-width: 300px;
  max-height: 260px;
  min-height: 260px;
`;
export const Course = styled.div`
  font-weight: bold;
  padding-bottom: 18px;
`;
export const Institution = styled.div`
  color: var(--plomo);
  padding-bottom: 18px;
`;
export const Inscribed = styled.div`
  color: black;
  font-weight: bold;
  padding-bottom: 18px;
`;
export const InscribedState = styled.div`
  color: var(--blueAgua);
  font-size: var(--letraMediana);
  align-self: flex-end;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperState = styled.div`
  display: flex;
  flex-direction: inline;
  height: 50%;
`;
