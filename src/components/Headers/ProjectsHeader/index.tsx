import { BackToHomeButton, Header, Logo } from "./styles"

export const ProjectsHeader = () => {
    return (
        <Header>
            <Logo>J <span>J</span></Logo>
            <BackToHomeButton to='/' title="Voltar para a página inicial">
                Voltar para a página inicial
            </BackToHomeButton>
        </Header>
    )
}

export default ProjectsHeader