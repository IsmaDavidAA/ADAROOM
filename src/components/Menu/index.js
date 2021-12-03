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
  CSesion,
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
  Registro,
  Container,
  Wrapper,
  Menun,
  MenuItem,
  AMenuItem,
  AAMenuItem,
  AAMenuItemUser,
  AMenuItemCS,
  AMenuItemIM,
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
              <AMenuItemIM>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <UsuarioImagen src={imgusuario} />
                </MenuItemLink>
              </AMenuItemIM>
              <AAMenuItemUser>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Estudiate> {nombre} </Estudiate>
                </MenuItemLink>
              </AAMenuItemUser>
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
                  <Link to={`/misCursos`} id="este">
                    <CursoEstilo> MIS CURSOS</CursoEstilo>
                  </Link>
                </MenuItemLink>
              </MenuItem>
              <AMenuItemCS>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Link to={`/`}>
                    <CSesion
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
                    </CSesion>
                  </Link>
                </MenuItemLink>
              </AMenuItemCS>
            </Menun>
          </IconContext.Provider>
        </Wrapper>
      </Container>
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
              <AAMenuItem>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Link to={`/Registro`}>
                    <Registro>REGISTRARSE</Registro>
                  </Link>
                </MenuItemLink>
              </AAMenuItem>
              <AMenuItem>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <Link to={`/login`}>
                    <IniciaSecion> INICIAR SESIÓN</IniciaSecion>
                  </Link>
                </MenuItemLink>
              </AMenuItem>
            </Menun>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    );
  }
}
export default Menu;
