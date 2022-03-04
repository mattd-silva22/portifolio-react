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
    

    

    
    .welcome-section {
        padding: 20.0rem 0rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        gap: 1.6rem;
        
        h1 {
            color: white;
            font-size: 4.8rem;
            
            

            
        }

        p {
            
            font-size: 2.4rem;
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