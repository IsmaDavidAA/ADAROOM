import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
        --white: #fff;
        --black: #000;
        --blue: #1E3163;
        --blueAgua: #0061A8;
        --plomo: #999999;
        --plomoAgua: #C4C4C4;
        --blueSuave: #8AB6D6;
        
        --SuperGrande: 70px;
        --TituloPrimario: 30px;
        --letraEstandar: 22px;
        --letraMediana: 20px;
        --letraPequenia: 18px;
        --letraUltraPequenia: 16px;
    }
    * {
        font-family: "Segoe UI";
    }

    `;
