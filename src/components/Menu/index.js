import React, { useEffect, useState, useContext } from "react";
import ada from "../../images/logoADAROOM.jpg";
import { MenuEstilo, ImagenEstilo, InicioEstilo, CursoEstilo, IniciaSecion, MisCuros, Estudiate } from "./Menu.styles";
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams,} from "react-router-dom";
import { AuthContext } from "../../Context";
import{apiSettings} from "../../services/services"

function Menu() {
  
  const [user,setUser] = useState([]);
  const [nombre,setNombre] = useState("");
  const {currentUser} = useContext(AuthContext);
  const fetchName = async () =>   {

    if (currentUser) {
      const temp = await apiSettings.getName(currentUser.uid);
      setUser(temp[1]);
      setNombre(temp[1].nombreCompleto)
      console.log(temp);
    }
  }
  useEffect(() => {
    fetchName() 
}, [currentUser, user])

  


if(currentUser){
  return (
    <MenuEstilo>
      <Link to={`/`}>
        <ImagenEstilo  src={ada} />
      </Link>
      <Link to={`/`}>
      <InicioEstilo > INICIO</InicioEstilo>
      </Link>
      <Link to={`/cursos`}>
      <CursoEstilo > CURSOS</CursoEstilo>
      </Link>
      <Link to={`/`}>
      <MisCuros> MIS CURSOS</MisCuros>
      </Link>
      <Link to={`/`}>
      <Estudiate> {nombre} </Estudiate>
      </Link>



    </MenuEstilo>
  );
  }
  else{
   return (
    <MenuEstilo>
      <Link to={`/`}>
        <ImagenEstilo  src={ada} />
      </Link>
      <Link to={`/`}>
      <InicioEstilo > INICIO</InicioEstilo>
      </Link>
      <Link to={`/cursos`}>
      <CursoEstilo > CURSOS</CursoEstilo>
      </Link>
      <Link to={`/login`}>
      <IniciaSecion > INICIE SESION</IniciaSecion>
      </Link>
      
      
    </MenuEstilo>
    
  );

  }
}
export default Menu;
