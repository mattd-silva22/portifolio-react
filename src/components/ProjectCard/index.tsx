import { CardContainer } from "./styles";
import testeImg from "../../assets/teste.jpg"
import testeImg2 from "../../assets/projects-imgs/zomentum.png"

export function ProjectCard(){

    return(
        
        <CardContainer>
            <img src={testeImg2} alt="" />

            <div className="card-info">
                <h1>Titulo</h1>

                <p>lorem ipslum lorem ipsolum lorem ipslum lorem ipsolum lorem ipslum lorem ipsolum lorem ipslum lorem ipsolum</p>
            </div>

            <div className="link-area">
                <a href="#" className="visit-btn">Visite</a> <a href="#">Codigo Fonte</a>
            </div>
        </CardContainer>
    )
}