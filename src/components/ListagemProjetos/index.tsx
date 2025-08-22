import * as S from "../Projetos/styles"
import { BtnGitHub, Container, Content } from "./styles"

import externalLink from "../../assets/img/icons/external-link.png"
import gitHubIcon from "../../assets/img/icons/github64.png"

const ListagemProjetos = () => {
    return (
        <Container id="start">
                <h2>Todos os Projetos</h2>
            <Content>
                <S.Card
                    href="https://efood-six-pearl.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        eFood - e-commerce de restaurantes <i>(Em andamento)</i>
                    </p>
                    <img src={externalLink} alt="Link" />
                </S.Card>
                <S.Card
                    href="https://minhastarefas-lac.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Minhas Tarefas — App de Gestão
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://webpousada.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Pousada Secreta
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://recanto-dos-livros.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Recanto dos Livros — Uma livraria espetacular
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://devjoseclone-disneyplus-two.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Clone - Disney+
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://nu-juros.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        NuJuros - Simulador de juros
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://app-imc-saude.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Calculadora IMC - A base para a saúde
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://githubprofile-josedev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        GitHub Search Profile - Buscador de perfis
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://sorteadordevjose.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Sorteador
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://titan-gourmet.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Titan Gourmet Restaurant
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://games-the-shop.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        Games The Shop
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://jnews-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        J.News - <em>(Em andamento)</em>
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://ebac-news-dev-jose.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        EBAC News
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://ebac-motors-ten-omega.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        EBAC Motors
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
                <S.Card
                    href="https://todolist-devjose.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <p>
                        ToDo-List
                    </p>
                    <img src={externalLink} alt="" />
                </S.Card>
            </Content>
            <BtnGitHub
                href="https://github.com/jose-junior1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver lista completa dos repositórios GitHub
                <img src={gitHubIcon} alt="GitHub" />
            </BtnGitHub>
        </Container>
    )
}

export default ListagemProjetos