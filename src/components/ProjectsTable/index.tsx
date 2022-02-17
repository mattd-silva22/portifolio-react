import { ProjectCard } from "../ProjectCard";
import { Container, Content } from "./styles";

export function ProjectsTable() {

    return(
        <Container>
            <Content>
                <div className="title-area">
                    <h1 className="title-projects default-title">  Portifolio</h1>
                </div>
                <div className="projects-table">
                    <ProjectCard></ProjectCard>

                    <ProjectCard></ProjectCard>

                    <ProjectCard></ProjectCard>
                </div>
            </Content>
        </Container>
    )
}