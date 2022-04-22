import { Container, Content } from "./styles";
import testImg from "../../assets/me.jpeg"
export function AboutMe() {

    return (
        <Container>
            <Content>
                <section id="about-bio">               
                        <h1 className="title-about"> <span className="h-line"></span> Quem sou </h1>
                        
                        <p>
                        Sou <span> Matheus Barretto</span>, Desenvolvedor Web Front-End e graduando em Sistemas de informação pela UFBA. Inicie minha aventeura pelo mundo de tecnologia ao 18 anos quando tive contato com a linguagem Python durante um curso. 
                        </p>
                        <p>
                        Hoje foco meu trabalho em desenvolvimento de aplicações Web usando as princiapis tecnoloigas do mercado. principalmente o ecosistema Javascript.
                        </p>

                        

                        

                        
                        

                </section>

                <img src={testImg} alt=""  className="my-pic"/>
            </Content>
        </Container>
    )

}