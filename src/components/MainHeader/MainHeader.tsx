import { useState } from "react";
import { Container, Content, RespNavbar } from "./styles";

export function MainHeader() {

    
    const [ isbtnActive , setIsBtnState] = useState(false)

    const handleHamBtnClick= ()=> {
        if(!isbtnActive) {
            setIsBtnState(true)
            document.body.classList.add('scrollock');
        } else {
            setIsBtnState(false)
            document.body.classList.remove('scrollock');
        }
    }

    
    
    
    return (
        <>
        <Container id="top-header">
            <Content id="header-container">
                <div id="top-header-logo">
                    <h1 className="gira">  <span>{"{"}</span><span>/</span><span>{"}"}</span> </h1>
                </div>
        
                
                <nav id="navbar">
                    <ul>
                        <li>
                            <a href="#about-bio" className="navtop-link">Inicio</a>
                        </li>
        
                        <li>
                            <a href="#projects-bio" className="navtop-link">Portifolio</a>
                        </li>
        
                        <li>
                            <a href="#contato-bio" className="navtop-link">Sobre mim</a>
                        </li>

                        <li>
                            <a href="#contato-bio" className="navtop-link">Contato</a>
                        </li>

                      
                    </ul>
                </nav>
        
                <div id="hambtn" className={ isbtnActive? "active" : ""} onClick={handleHamBtnClick}>
                    <div className="hambtn-bar"></div>
                    <div className="hambtn-bar"></div>
                    <div className="hambtn-bar"></div>
                </div>

               

                
            </Content>

            
    </Container>

    <RespNavbar>

        <nav id="nav-resp" className={ isbtnActive? "active" : ""}>
            <ul>
                <li>
                    <a href="#" className="navtop-link">Inicio</a>
                </li>

                <li>
                    <a href="#" className="navtop-link">Portifolio</a>
                </li>

                <li>
                    <a href="#" className="navtop-link">Sobre mim</a>
                </li>

                <li>
                    <a href="#" className="navtop-link">Contato</a>
                </li>

            </ul>
        </nav>

    </RespNavbar>

    </>
    
    )
}