import projects from "../../mocks/Projects"
import CardProjects from "../CardProjects"

import projectIcon from "../../assets/img/icons/project.png"

import * as S from "./styles"

const Projetos = () => {
    return (
        <S.Container id="projetos">
            <S.Content>
                <h2>Projetos</h2>
                <ul>
                    {projects.slice(0, 3).map((project) => (
                        <CardProjects
                            key={project.id}
                            title={project.title}
                            img={project.img}
                            isDevelopment={project.isDevelopment}
                            target={project.target}
                            id={project.id}
                        />
                    ))}
                </ul>
                <S.BtnProjects to='/projetos'>
                    <img src={projectIcon} alt="Projetos" />
                    Todos os projetos
                </S.BtnProjects>
            </S.Content>
        </S.Container>
    )
}

export default Projetos