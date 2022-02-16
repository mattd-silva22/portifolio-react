import { darken } from "polished";
import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --yellow: #f99734;
        --darker-bg: #1e2125;
        --light-dark-bg: #3c3e41;
        --darker-purple: #7d4296;
        --blue-primary: #1F78B4;
        --dark-100 : ${darken(0.008, "#1e2125")}
    }
    //    font-family: 'Cutive Mono', monospace;

    //  font-family: 'Roboto', sans-serif;

    * {
        margin: 0;
        padding: 0px;
        
    }

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: var(--darker-bg);
    }

    .code-text {
        font-family: 'Cutive Mono', monospace;
    }

    .h-line {
            width: 35px;
            border-radius: 20px;
            background-color: #fff;
            height: 5px;
            
        }
    
    .default-title{
        color: #fff;
        text-align: center;
        font-size: 4.8rem;
        
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.6rem;
    }

    @media (max-width:920px) {
        body.scrollock {
            height: 100%;
            overflow: hidden;
        }
    }

    



`