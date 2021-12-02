import React, { useEffect, useState, useContext } from "react";
import ada from "../../images/logoADAROOM.jpg";
import imgusuario from "../../images/user.png";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import {
  MenuEstilo,
  ImagenEstilo,
  InicioEstilo,
  CursoEstilo,
  IniciaSecion,
  MisCuros,
  Estudiate,
  UsuarioImagen,
  TrianguloEstilo,
  CerrarSesion,
  Mensage,
  Contenedor,
  Estilobarra,
  nombrebutton,
  Container,
  Wrapper,
  Menun,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Menu.styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { AuthContext } from "../../Context";
import { apiSettings } from "../../services/services";

import { IconContext } from "react-icons";

function Menu() {
  const [user, setUser] = useState([]);
  const [nombre, setNombre] = useState("");
  const { currentUser } = useContext(AuthContext);

  const fetchName = async () => {
    if (currentUser) {
      const temp = await apiSettings.getName(currentUser.uid);
      setUser(temp[1]);
      setNombre(temp[1].nombreCompleto);
      console.log(temp);
    }
  };
  useEffect(() => {
    fetchName();
  }, [currentUser]);

  const auth = getAuth();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (currentUser) {
    return (
      <MenuEstilo>
        <Link to={`/`}>
          <ImagenEstilo src={ada} />
        </Link>
        <Link to={`/`}>
          <InicioEstilo> INICIO</InicioEstilo>
        </Link>
        <Link to={`/cursos`}>
          <CursoEstilo> CURSOS</CursoEstilo>
        </Link>
        <Link to={`/misCursos`} id="este">
          <MisCuros> MIS CURSOS</MisCuros>
        </Link>
        <Estudiate> {nombre} </Estudiate>
        <TrianguloEstilo href="#"> &#x25BC; </TrianguloEstilo>
        <Estilobarra>
          <Link to={`/`}>
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    window.location.reload();
                    // history.push("/");
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            >
              {""}
              Cerrar Sesión
            </button>
          </Link>
        </Estilobarra>
        <UsuarioImagen src={imgusuario} />
      </MenuEstilo>
    );
  } else {
    return (
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <Link to={`/`}>
              <ImagenEstilo src={ada} />
            </Link>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <Menun open={showMobileMenu}>
              <MenuItem>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Link to={`/`}>
                    <InicioEstilo> INICIO</InicioEstilo>
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Link to={`/cursos`}>
                    <CursoEstilo> CURSOS</CursoEstilo>
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Link to={`/login`}>
                    <IniciaSecion> INICIAR SESIÓN</IniciaSecion>
                  </Link>
                </MenuItemLink>
              </MenuItem>
            </Menun>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    );
  }
}
export default Menu;
