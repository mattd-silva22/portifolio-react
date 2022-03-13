import { useState } from "react";
import { ProjectCard } from "../ProjectCard";
import { Container, Content } from "./styles";


const myProjects = [
    {
        "uid": 1,
        "title": "Zomentum",
        "date": "2021",
        "img": "https://raw.githubusercontent.com/mattd-silva22/portifolio-react/main/src/assets/projects-imgs/zomentum.png",
        "text": "Zomentum, um site institucional para uma empresa de tecnologia ficticia. Feito ultizando HTML, CSS e Javascript",
        "git-repo-link" : "https://github.com/mattd-silva22/zomentum-website.git",
        "deploy-link" : "https://mattd-silva22.github.io/zomentum-website/"
    },

    {
        "uid": 2,
        "title": "Loteria Federal",
        "date": "2022",
        "img": "https://raw.githubusercontent.com/mattd-silva22/portifolio-react/main/src/assets/projects-imgs/loteria.png",
        "text": "Loteria Federal, um site ficticio para consulta de resultados da loteria federal. Feito ultilizando React.js, Next.js , Styled-Components e Typescript",
        "git-repo-link" : "https://github.com/mattd-silva22/zomentum-website.git",
        "deploy-link" : "https://mattd-silva22.github.io/zomentum-website/"
    },

    {
        "uid": 3,
        "title": "InfoFlix",
        "date": "2021",
        "img": "https://raw.githubusercontent.com/mattd-silva22/portifolio-react/main/src/assets/projects-imgs/zomentum.png",
        "text": "Zomentum, um site institucional para uma empresa de tecnologia ficticia. Construido para fins de estudo durante capacitação na empresa junior da UFBA",
        "git-repo-link" : "https://github.com/mattd-silva22/zomentum-website.git",
        "deploy-link" : "https://mattd-silva22.github.io/zomentum-website/"
    }

]

export function ProjectsTable() {
    const [projectList , setProjectList] = useState(myProjects)
    return(
        <Container>
            <Content>
                <div className="title-area">
                    <h1 className="title-projects default-title">  Portifolio</h1>
                </div>
                <div className="projects-table">
                    
                    {projectList.map( item => {

                        return (
                            <ProjectCard
                                key={item.uid}
                                uid ={item.uid}
                                title={item.title}
                                text={item.text}
                                img={item.img}
                                deployLink={item["deploy-link"]}
                                repoLink={item["git-repo-link"]}
                            
                            
                            />
                        )
                        
                    })}

                
                </div>
            </Content>
        </Container>
    )
}