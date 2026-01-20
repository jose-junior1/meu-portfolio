import joseDev from "../../../assets/img/dev-josejunior.jpg"
import gitHubIcon from "../../../assets/img/icons/github64.png"
import linkedinIcon from "../../../assets/img/icons/linkedin64.png"

import * as S from "./styles"

const Hero = () => {
    return (
        <S.Container id="hero">
            <S.InfoStack>
                <aside>
                    <S.Text>
                        <h2>José <span>Junior</span></h2>
                        <p>Desenvolvedor Web Front-End</p>
                    </S.Text>
                    <S.IconsList>
                        <li title="Veja meus repositórios no GitHub">
                            <a
                                href="https://github.com/jose-junior1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <S.Image type="github">
                                    <img src={gitHubIcon} alt="GitHub" />
                                    <p>GitHub</p>
                                </S.Image>
                            </a>
                        </li>
                        <li title="Visite meu LinkedIn">
                            <a
                                href="https://www.linkedin.com/in/josejunior-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <S.Image type="linkedin">
                                    <img src={linkedinIcon} alt="Linkedin" />
                                    <p>LinkedIn</p>
                                </S.Image>
                            </a>
                        </li>
                    </S.IconsList>
                </aside>
                <S.CardAvatar>
                    <S.Avatar src={joseDev} alt="Foto de José Junior" />
                </S.CardAvatar>
            </S.InfoStack>
        </S.Container>
    )
}

export default Hero