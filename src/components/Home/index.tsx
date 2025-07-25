import { ContainerHome, ImgContainer, InfoStack, ListaIcons } from "./styles"
import gitHubIcon from "../../assets/img/icons/github64.png"
import linkedinIcon from "../../assets/img/icons/linkedin64.png"
const Home = () => {
    return (
        <ContainerHome id="home">
            <InfoStack>
                <h2>José <span>Junior</span></h2>
                <p>Desenvolvedor Web Front-End</p>
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
            </InfoStack>
        </ContainerHome>
    )
}

export default Home