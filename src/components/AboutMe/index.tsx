import { Container, Content } from "./styles";
import testImg from "../../assets/person.jpg"
export function AboutMe() {

    return (
        <Container>
            <Content>
                <section id="about-bio">               
                        <h1 className="title-about"> <span className="h-line"></span> Quem sou </h1>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit sodales condimentum. Aenean vitae orci at risus varius sollicitudin. Nulla ex magna, ultrices elementum auctor sed, sollicitudin eget lorem. Vivamus vestibulum venenatis dui, sed maximus libero iaculis id. 
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit sodales condimentum. Aenean vitae orci at risus varius sollicitudin. Nulla ex magna, ultrices elementum auctor sed, sollicitudin eget lorem. Vivamus vestibulum venenatis dui, sed maximus libero iaculis id. 
                        </p>

                        
                        

                </section>

                <img src={testImg} alt="" />
            </Content>
        </Container>
    )

}