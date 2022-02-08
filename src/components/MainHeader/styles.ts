import { darken } from "polished";
import styled  from "styled-components";



export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    //background-color: #3c3e41;
    //background-color: rgba(60, 62, 65,0.05);
    background-color: ${darken(0.018, "#1e2125")};
    

    font-size: 1.6rem;

`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 35px;
    width: 90%;
    max-width: 1444px;


    #top-header-logo h1 {
        font-size: 2.2em;

        span:nth-child(1) {
            color: rgb(21, 216, 79);
        }

        span:nth-child(2) {
            color: rgb(240, 206, 13);
        }

        span:nth-child(3) {
            color: rgb(31, 120, 180);
        }
    }



    #hambtn {
        display: none;

        .hambtn-bar {
            width: 38px;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
            margin: 6px 0;
            transition: 0.4s;
        }

    }

    .active {
            .hambtn-bar:nth-child(1) {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px);
            transform: rotate(-45deg) translate(-9px, 6px);
        }
        
        .hambtn-bar:nth-child(2) {opacity: 0;}
        
        .hambtn-bar:nth-child(3) {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
        }
    
    }

    #navbar  li {
    
        display: inline;
        margin: 0px 10px;

    }

    .navtop-link {
        font-size: 2.0rem;
        color: honeydew;
        text-decoration: none;
        text-transform: capitalize;
        padding: 5px;

        &:hover{
            color: var(--blue-primary) ;
        }
        
    }

    @media (max-width: 720px) {
            #navbar{
                display: none;
            }

            #hambtn {
                display: inline;
            }
        }

    
               
    `

    export const RespNavbar = styled.div`
        #nav-resp.active {
        
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        
            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                
        
                gap: 2rem;
        
                font-weight: 400;
        
                list-style: none;
                height: 100vh;

                li {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &:hover  {
                        background-color: var(--blue-primary);
                    }
                }
        
                li a {
                    font-size: 3rem;
                    
                    
        
                    &.link-btn {
                        color: var(--yellow);
                    }

                    
                }
            
            }
        
        }

            .navtop-link {
            font-size: 2.0rem;
            color: honeydew;
            text-decoration: none;
            text-transform: capitalize;
            padding: 5px;

            &:hover{
                color:  var(--yellow); ;
            }
        
    }
        
        #nav-resp {
            display: none;
        }
    
    
    
    `