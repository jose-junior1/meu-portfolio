import { Avatar, CardAvatar, ContainerHome, ImgContainer, InfoStack, ListaIcons, Text } from "./styles"
import gitHubIcon from "../../assets/img/icons/github64.png"
import linkedinIcon from "../../assets/img/icons/linkedin64.png"
import joseDev from "../../assets/img/dev-josejunior.jpg"
const Home = () => {
    return (
        <ContainerHome id="home">
            <InfoStack>
                <aside>
                    <Text>
                        <h2>José <span>Junior</span></h2>
                        <p>Desenvolvedor Web Front-End</p>
                    </Text>
                    <ListaIcons>
                        <li>
                            <a
                                href="https://github.com/jose-junior1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImgContainer type="github">
                                    <img src={gitHubIcon} alt="GitHub" />
                                    <p>GitHub</p>
                                </ImgContainer>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/josejunior-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImgContainer type="linkedin">
                                    <img src={linkedinIcon} alt="Linkedin" />
                                    <p>LinkedIn</p>
                                </ImgContainer>
                            </a>
                        </li>
                    </ListaIcons>
                </aside>
                <CardAvatar>
                    <Avatar src={joseDev} alt="Foto de José Junior" />
                </CardAvatar>
            </InfoStack>
        </ContainerHome>
    )
}

export default Home