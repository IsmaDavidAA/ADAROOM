import styled from "styled-components";

export const MenuEstilo = styled.div`
  background-color: #f8f8f8f8;
  padding: 0;
  box-shadow: 0px 0px 10px 0 #999999;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  height: 88px;
`;

export const ImagenEstilo = styled.img`
  width: 258px;
  height: 88px;
  margin-right: 70px;
`;

export const InicioEstilo = styled.a`
  color: #1e3163;
  font-weight: bold;
  font-size: var(--letraMediana);
  text-decoration: none;
`;

export const CursoEstilo = styled.a`
  font-size: var(--letraMediana);
  font-weight: bold;
  color: #1e3163;
  text-decoration: none;
`;
export const IniciaSecion = styled.a`
  color: #0061a8;
  font-size: var(--letraMediana);
  text-decoration: none;
`;

export const CSesion = styled.a`
  color: #0061a8;
  font-size: var(--letraMediana);
  text-decoration: none;
`;

export const Registro = styled.a`
  color: #0061a8;
  font-size: var(--letraMediana);
  text-decoration: none;
`;

export const MisCuros = styled.a`
  color: #1e3163;
  font-weight: bold;
  font-size: var(--letraMediana);
  position: absolute;
  bottom: 50px;
  top: 33px;
  left: 680px;
  text-decoration: none;
`;

export const Estudiate = styled.p`
  color: #0061a8;
  font-size: var(--letraMediana);
  top: 33px;
  left: 1070px;
  text-decoration: none;
  margin: 0px;
  text-aling: left;
`;
export const UsuarioImagen = styled.img`
  width: 55px;
  height: 55px;
`;

export const TrianguloEstilo = styled.div`
  color: #999999;
  position: absolute;
  left: 1320px;
  top: 35px;
  text-decoration: none;
`;

export const Container = styled.div`
  width: 100%;
  height: 88px;
  box-shadow: 0px 0px 10px 0 #999999;
  background-color: #f8f8f8f8;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const Menun = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  top: 0px;
  height: 88px;
  list-style: none;
  color: #1e3163;
  @media screen and (max-width: 960px) {
    background-color: #f8f8f8f8;
    position: absolute;
    top: 88px;
    z-index: 10;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  left: 455;
  height: 100%;
  color: #1e3163;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AMenuItem = styled.li`
  height: 100%;
  color: #1e3163;
  right: 0px;
  position: absolute;
  @media screen and (max-width: 960px) {
    position: relative;
    right: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AMenuItemCS = styled.li`
  left: 455;
  height: 100%;
  color: #1e3163;
  right: 0px;
  position: absolute;
  display: none;
  @media screen and (max-width: 960px) {
    position: relative;
    right: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AMenuItemCSDrop = styled.li`
  left: 455;
  height: 100%;
  color: #1e3163;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const AMenuItemIM = styled.li`
  left: 455;
  height: 100%;
  color: #1e3163;
  right: 52px;
  position: absolute;
  @media screen and (max-width: 960px) {
    position: relative;
    right: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AAMenuItemUser = styled.li`
  left: 455;
  height: 100%;
  color: #1e3163;
  right: 133px;
  position: absolute;
  @media screen and (max-width: 960px) {
    position: relative;
    right: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AAMenuItem = styled.li`
  height: 100%;
  color: #1e3163;
  right: 159px;
  position: absolute;
  @media screen and (max-width: 960px) {
    position: relative;
    right: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 0.8rem;
  color: #64b2ff;
  font-family: "Segoe UI";
  font-size: var(--letraMediana);
  font-weight: bold;
  font-weight: 300;
  transition: 0.5s all ease;
  a {
    text-decoration: none;
  }
  &:hover {
    color: #fff;
    transition: 0.5s all ease;
    div {
      svg {
        fill: #23394d;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #1e3163;
      margin-right: 0.5rem;
    }
  }
`;
