import { BtnDownload, ContainerSobre, ContainerTexto } from "./styles"

import downloadIcon from "../../assets/img/icons/download.png"

const Sobre = () => {
    return (
        <ContainerSobre id="sobre" className="section">
            <ContainerTexto className="content">
                <h2>Quem sou eu</h2>
                <div>
                    <p>
                        Olá! Me chamo <span>José Junior</span> e sou um desenvolvedor front-end apaixonado por tecnologia, design e boas experiências de usuário.
                    </p>
                    <p>
                        Tenho formação em Análise e Desenvolvimento de Sistemas pela Universidade Anhembi Morumbi e especializado em Engenharia Front-End pela EBAC, com foco em tecnologias como <span>React, TypeScript, JavaScript moderno, HTML, CSS</span> e <span>ferramentas de build</span>.
                    </p>
                    <p className="p-ocult">
                        Embora minha experiência profissional até agora tenha sido em outras áreas, venho me dedicando intensamente à transição para o desenvolvimento web. Estou sempre buscando novos desafios e oportunidades para crescer como desenvolvedor.
                    </p>
                    <p>
                        Meu objetivo é usar tecnologia para transformar ideias em soluções úteis, responsivas e acessíveis. Estou em busca da minha primeira oportunidade profissional na área de desenvolvimento front-end.
                    </p>
                </div>
                <BtnDownload
                    href="https://drive.google.com/file/d/1hFffTPOQIOw-qatqwm1iFcFNfm5bDiiT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visualizar currículo e baixar"
                >
                    <img src={downloadIcon} alt="Baixar" />
                    Download CV
                </BtnDownload>
            </ContainerTexto>
        </ContainerSobre>
    )
}

export default Sobre