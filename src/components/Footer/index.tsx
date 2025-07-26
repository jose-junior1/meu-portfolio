import { Logo } from "../Menu/styles"
import { RodapeContainer } from "./styles"
import gitHubIcon from "../../assets/img/icons/github64.png"
import linkedinIcon from "../../assets/img/icons/linkedin64.png"

const Rodape = () => {
    return (
        <RodapeContainer>
            <Logo>
                J <span>J</span>
            </Logo>
            <a
                href="https://github.com/jose-junior1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={gitHubIcon} alt="Ícone GitHub" />
            </a>
            <a
                href="https://www.linkedin.com/in/josejunior-dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={linkedinIcon} alt="Ícone LinkedIn" />
            </a>
        </RodapeContainer>
    )
}

export default Rodape