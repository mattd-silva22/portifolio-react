import styled  from "styled-components";
import { darken } from "polished";


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
  
    background-color: ${darken(0.018, "#1e2125")} ;
    

    

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1444px;
    height:720px ;

    .code-text {
        font-size: 1.4rem;
    }
    .console-log-2 {
        color: #F24A72
    }
    .console-log-1 {
     color: #6BCB77;
    }

    .console-log-3 {
        
        color: #1F78B4;
    }
    .console-log-4 {
        color: #E45826;
    }
    

    

    
    .welcome-section {
        padding: 20.0rem 0rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        gap: 1.0rem;
        
        h1 {
            color: white;
            font-size: 6.4rem;
            
            

            
        }

        p {
            
            font-size: 3.2rem;
            color: floralwhite;
        }

       

        .myname {
            color: honeydew;
            font-weight: 700;
            color: var(--blue-primary);
            transition: all s ease-in-out;

            &:hover{
                text-decoration: underline;
                
                cursor: pointer;
            }
        }
    }

    img {
        width: 600px;
        @media(max-width: 1080px) {
            display: none;
        }
    }
    
    `