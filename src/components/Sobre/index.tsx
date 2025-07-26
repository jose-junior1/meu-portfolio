import { ContainerSobre, ContainerTexto } from "./styles"
const Sobre = () => {
    return (
        <ContainerSobre id="sobre">
            <ContainerTexto>
                <h2>Quem sou eu</h2>
                <div>
                    <p>
                        Olá! Me chamo <span>José Junior</span> e sou um desenvolvedor front-end apaixonado por tecnologia, design e boas experiências de usuário.
                    </p>
                    <p>
                        Tenho formação em Análise e Desenvolvimento de Sistemas pela Universidade Anhembi Morumbi e estou me especializando em Engenharia Front-End pela EBAC, com foco em tecnologias como <span>React, TypeScript, JavaScript moderno, HTML, CSS</span> e <span>ferramentas de build</span>.
                    </p>
                    <p>
                        Embora minha experiência profissional até agora tenha sido em áreas como manutenção de redes e infraestrutura técnica, venho me dedicando intensamente à transição para o desenvolvimento web. Estou sempre buscando novos desafios e oportunidades para crescer como desenvolvedor.
                    </p>
                    <p>
                        Nas horas vagas, gosto de jogar videogame, ver reviews no YouTube e explorar ideias criativas.

                    </p>
                    <p>
                        Meu objetivo é usar tecnologia para transformar ideias em soluções úteis, responsivas e acessíveis. Estou em busca da minha primeira oportunidade profissional na área de desenvolvimento front-end.
                    </p>
                    <p>
                        Vamos construir algo incrível juntos? 😄
                    </p>
                </div>
            </ContainerTexto>
        </ContainerSobre>
    )
}

export default Sobre