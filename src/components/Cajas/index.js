import React from 'react';
import { EstiloCaja, Pdf, Video, Check, Titulo,  } from "./Cajas.styled";
//import {Link} from "react-router-dom"; 
import pdf from "../../images/pdf.png";
import video from "../../images/video.png";


 const Cajas = (props) => {
     
    return (
        
        <EstiloCaja>
         { props.element.tipoInf === "pdf"
           ? <Pdf src={pdf}> </Pdf> 
           :<Video src={video}></Video>   
          }
            <Check type ="checkbox"/>
            <Titulo href= {props.element.link}>{props.element.titulo}</Titulo>
            </EstiloCaja>
    );
    
};
export default Cajas;