import { BtnProjects, Card, Container, Content } from "./styles"
import externalLink from "../../assets/img/icons/external-link.png"
import project from "../../assets/img/icons/project.png"

const Projetos = () => {
    return (
        <Container id="projetos">
            <Content>
                <h2>Projetos</h2>
                <Card
                    href="https://minhastarefas-lac.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Minhas Tarefas — App de Gestão com React + Redux
                    </p>
                    <img src={externalLink} alt="" />
                </Card>
                <Card
                    href="https://webpousada.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Pousada Secreta - A pousada reservada em Angra dos Reis
                    </p>
                    <img src={externalLink} alt="" />
                </Card>
                <Card
                    href="https://recanto-dos-livros.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Recanto dos Livros — Uma livraria espetacular
                    </p>
                    <img src={externalLink} alt="" />
                </Card>
                <BtnProjects to='/projetos'>
                    <img src={project} alt="Projetos" />
                    Todos os projetos
                </BtnProjects>
            </Content>
        </Container>
    )
}

export default Projetos