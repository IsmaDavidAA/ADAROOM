import React, { useEffect, useState, useContext } from "react";
import ada from "../../images/logoADAROOM.jpg";
<<<<<<< Updated upstream
=======
import imgusuario from "../../images/user.png";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { usePopper } from "react-popper";

>>>>>>> Stashed changes
import {
  MenuEstilo,
  ImagenEstilo,
  InicioEstilo,
  CursoEstilo,
  IniciaSecion,
  MisCuros,
  Estudiate,
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

<<<<<<< Updated upstream
=======
  const auth = getAuth();
  const history = useHistory();
//prueba drop con popUs
 
  

 
//prueba con popUs
>>>>>>> Stashed changes
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
        <Link to={`/misCursos`}>
          <MisCuros> MIS CURSOS</MisCuros>
        </Link>
        <Link to={`/`}>
          <Estudiate> {nombre} </Estudiate>
        </Link>
<<<<<<< Updated upstream
=======
        <TrianguloEstilo href = "#"> &#x25BC; </TrianguloEstilo>
       <Estilobarra>
        <Link to= {`/`}>
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
          Cerrar Sesion.
        </button>
        </Link>
        </Estilobarra>

       
       
        <UsuarioImagen src={imgusuario} />
>>>>>>> Stashed changes
      </MenuEstilo>
    );
  } else {
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
        <Link to={`/login`}>
          <IniciaSecion> INICIAR SESION</IniciaSecion>
        </Link>
      </MenuEstilo>
    );
  }
}
export default Menu;
