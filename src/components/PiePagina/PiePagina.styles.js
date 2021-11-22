import styled from "styled-components";
export const PiePagEstilo = styled.div`
  background-color: #1e3163;
  display: flex;
  position: relative;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const WrapperA = styled.div`
  margin-left: 50px;
  display: inline;
  margin-bottom: 15px;
  @media only screen and (max-width: 850px) {
    margin-left: 0px;
    margin-bottom: 5px;
  }
`;
export const WrapperB = styled.div`
  margin-right: 100px;
  display: inline;
  @media only screen and (max-width: 850px) {
    margin-right: 0px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Cont = styled.div`
  display: flex;
`;

export const NombreAdaroom = styled.p`
  color: #ffffff;
  font-weight: semi-bold;
  font-size: var(--TituloPrimario);
  margin-top: 20px;
  margin-bottom: 0px;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const DerechosA = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-top: 18px;
  margin-bottom: 13px;
`;
export const Email = styled.p`
  font-size: var(--letraPequenia);
  font-weight: bold;
  color: #ffffff;
  font-family: "Segoe UI";
  margin-top: 16px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 10px;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const DirEmail = styled.p`
  font-size: var(--letraPequenia);
  color: #ffffff;
  margin-left: 25px;
  margin-top: 35px;
  margin-bottom: 0px;
  @media only screen and (max-width: 850px) {
    margin-left: 0px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;
export const ImagenFacebook = styled.img`
  width: 51px;
  height: 52px;
`;
