import { Citacao, ContainerCredits, ContainerText, Tecnologies } from "./styles"

const Credits = () => {
    return (
        <ContainerCredits id="creditos">
            <h2>Créditos</h2>
            <ContainerText>
                <p>
                    Primeiramente, gostaria de agradecer a <strong>Deus</strong>, pois sem <strong>Ele</strong> nada disso seria possível. Em segundo lugar, agradeço a <strong>você</strong>, que dedicou um tempo para conhecer um pouco sobre o meu trabalho.
                </p>
                <div>
                    <h3>Tecnologias utilizadas neste <span>portfólio</span></h3>
                    <Tecnologies>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="React"
                        >
                            <img className="react" src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' alt="Logo React" />
                        </a>
                        <a
                            href="https://www.typescriptlang.org/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="TypeScript"
                        >
                            <img className="ts" src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' alt="Logo TypeScript" />
                        </a>
                        <a
                            href="https://styled-components.com/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Styled-components"
                        >
                            <img className="styled-icon" src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original-wordmark.svg' alt="Logo Styled Components" />
                        </a>
                        <a
                            href="https://reactrouter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="React Router DOM"
                        >
                            <img className="react-router" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" alt="Logo React Router" />
                        </a>
                        <a
                            href="https://www.npmjs.com/package/react-scroll"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="React Scroll"
                        >
                            <p className="react-scroll">
                            <span className="firstName">React</span>
                            <span>Scroll</span>
                        </p>
                        </a>
                        <a
                            href="https://git-scm.com/doc"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Git"
                        >
                            <img className="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="Logo Git" />
                        </a>
                    </Tecnologies>
                    <Citacao>
                        <cite>
                            “Porque para Deus nada será impossível.”
                        </cite>
                        <span className="livro">Lucas 1:37</span>
                    </Citacao>
                </div>
            </ContainerText>
        </ContainerCredits>
    )
}

export default Credits