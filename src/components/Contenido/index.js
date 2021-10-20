
import React from "react";
import {Contenido} from "./Contenidos.styles";
import Secciones  from "../Secciones";
import { Caja } from "../Secciones/Seccions.styles";

const Contenidos = (props) => {

 return (
        <div>
            <>
           <Contenido>
                   <h3>Contenido del curso</h3>
           </Contenido>
                
                <Caja>  
                <Secciones datos={props.datos}/>
                </Caja>
                
            </>    
        </div>
 );
    }
    export default Contenidos;


