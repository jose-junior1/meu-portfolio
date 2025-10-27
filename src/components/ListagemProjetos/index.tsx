import projects from "../../data/Projects"
import CardProjects from "../CardProjects"

import gitHubIcon from "../../assets/img/icons/github64.png"

import * as S from "./styles"

const ListagemProjetos = () => {
    return (
        <S.Container id="start">
            <h2>Todos os Projetos</h2>
            <S.Content>
                {projects.map((project) => (
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
            </S.Content>
            <S.BtnGitHub
                href="https://github.com/jose-junior1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver lista completa dos repositórios GitHub"
            >
                Ver lista completa dos repositórios GitHub
                <img src={gitHubIcon} alt="GitHub" />
            </S.BtnGitHub>
        </S.Container>
    )
}

export default ListagemProjetos