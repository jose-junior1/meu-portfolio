import projects from "../../data/Projects"
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
                            isRefactored={project.isRefactored}
                            target={project.target}
                            id={project.id}
                            stacks={project.stacks}
                        />
                    ))}
                </ul>
                <S.BtnProjects to='/projetos' title="Ver todos os projetos">
                    <img src={projectIcon} alt="Projetos" />
                    Todos os projetos
                </S.BtnProjects>
            </S.Content>
        </S.Container>
    )
}

export default Projetos