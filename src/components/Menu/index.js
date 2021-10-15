import React from "react";
//import './Menu.css';
import ada from '../../images/logoADAROOM.jpg';
import {MenuEstilo, ImagenEstilo, InicioEstilo, CursoEstilo } from './Menu.styles';

function Menu(){
    return (
      <MenuEstilo>
    
        
          <ImagenEstilo src ={ada}/>
          <InicioEstilo href=""> INICIO</InicioEstilo>
          <CursoEstilo  href=""> CURSOS</CursoEstilo>
          
      </MenuEstilo>
    );
}
export default Menu;