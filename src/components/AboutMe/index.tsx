import { Container, Content } from "./styles";
import testImg from "../../assets/me.jpeg"
export function AboutMe() {

    return (
        <Container>
            <Content>
                <section id="about-bio">               
                        <h1 className="title-about"> <span className="h-line"></span> Quem sou </h1>
                        
                        <p>
                             Sou Matheus, Graduando em Sistemas de informação pela UFBA e desenvolvedor Web Front-End construo aplicaçoes modernas utilizando as principais tecnologias do mercado.
                        </p>

                        

                        
                        

                </section>

                <img src={testImg} alt=""  className="my-pic"/>
            </Content>
        </Container>
    )

}