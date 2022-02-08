import { CardContainer } from "./styles";
import testeImg from "../../assets/teste.jpg"

export function ProjectCard(){

    return(
        
        <CardContainer>
            <img src={testeImg} alt="" />

            <div className="card-info">
                <h1>Titulo</h1>

                <p>lorem ipslum lorem ipsolum lorem ipslum lorem ipsolum lorem ipslum lorem ipsolum lorem ipslum lorem ipsolum</p>
            </div>

            <div className="link-area">
                <a href="#">Visite</a> <a href="#">Codigo Fonte</a>
            </div>
        </CardContainer>
    )
}