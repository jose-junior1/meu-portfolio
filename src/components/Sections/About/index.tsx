import downloadIcon from "../../../assets/img/icons/download.png"

import { DownloadButton, Container, TextContent } from "./styles"

const Sobre = () => {
    return (
        <Container id="about" className="section">
            <TextContent className="content">
                <h2>Quem sou eu</h2>
                <div>
                    <p>
                        Olá! Me chamo <span>José Junior</span> e sou um Desenvolvedor Front-End com ênfase na construção de SPAs (Single Page Applications) robustas com <span>React, TypeScript e Styled-components</span>.
                    </p>
                    <p>
                        Minha experiência é focada em transformar designs em aplicações de alta performance. Desde uma simples Landing Page até um e-commerce com fluxo de compra completo.
                    </p>
                    <p>
                        Com formação em Análise de Sistemas e especialização em Engenharia Front-End (EBAC), busco <span>oportunidades (CLT ou PJ)</span> para aplicar meu conhecimento em produtos desafiadores.
                    </p>
                </div>
                <DownloadButton
                    href="https://drive.google.com/file/d/11ASKJVkqAld9hHHSIr13D_f_e7F-aUgl/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visualizar currículo e baixar"
                >
                    <img src={downloadIcon} alt="Baixar" />
                    Download CV
                </DownloadButton>
            </TextContent>
        </Container>
    )
}

export default Sobre