
import React from "react";
import {Contenido} from "./Contenidos.styles";
import Secciones  from "../Secciones";


const Contenidos = (props) => {

 return (
        <div>
           <Contenido>
                   <h3>Contenido del curso</h3>
           </Contenido>
                <ul>
                <Secciones datos={props.datos}/>
                </ul>
        </div>
 );
    }
    export default Contenidos;


