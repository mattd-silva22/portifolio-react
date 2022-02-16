import { Container, Content } from "./styles";
import developerImg from "../../assets/webdev.png"
export function MainBanner() {

    return(
        <Container>
            <Content>
            <div className="welcome-section">
                <p className="code-text">printf("Hello World 💻")<span>|</span></p>
                <h1 className="myname">Matheus Barretto</h1>
                <p>Desenvolvedor Web</p>

                
            </div>

            <img src={developerImg} alt="" />
            </Content>
        </Container>
    )
}