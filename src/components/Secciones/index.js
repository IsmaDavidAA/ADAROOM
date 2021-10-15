import React from "react";
import { Seccions, } from "./Seccions.styles";
import Seccion from "../Seccion";

const Secciones = (props) => {
    
    return (
         <div classname="row">
                {props.datos.map((seccion) => {
                     return (
                       <Seccions>
                       
                        <li>  <Seccion currectSeccion = {seccion}  /></li>

                       </Seccions>  
                     );
                      }      
                 )
             }
       </div>  
     );
};
export default Secciones;
