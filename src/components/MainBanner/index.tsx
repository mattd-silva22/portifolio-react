import { Container, Content } from "./styles";
import developerImg from "../../assets/webdev.png"
export function MainBanner() {

    return(
        <Container>
            <Content>
            <div className="welcome-section">

                <p className="code-text">

                    <span className="console-log-1">console.</span>

                    <span className="console-log-2">log</span>  

                    <span className="console-log-3">
                        (<span className="console-log-4">"Hello World 💻"</span>)
                    </span>

                    <span>|</span>
                
                
                </p>
                <h1 className="myname">Matheus Barretto</h1>
                <p>Desenvolvedor Web</p>

                
            </div>
        
            <img src={developerImg} alt="" />
            </Content>
        </Container>
    )
}