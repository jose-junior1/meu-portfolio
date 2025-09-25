import { RodapeContainer, Logo } from "./styles"
import gitHubIcon from "../../assets/img/icons/github64.png"
import linkedinIcon from "../../assets/img/icons/linkedin64.png"
import wppIcon from "../../assets/img/icons/whatsapp.png"

const Rodape = () => {
    return (
        <RodapeContainer>
            <Logo>
                J <span>J</span>
            </Logo>
            <a
                href="https://wa.me/5511996411760"
                target="_blank"
                rel="noopener noreferrer"
                title="Conversar no Whatsapp"
            >
                <img src={wppIcon} alt="Ícone WhatsApp" />
            </a>
            <a
                href="https://github.com/jose-junior1"
                target="_blank"
                rel="noopener noreferrer"
                title="Veja meus repositórios no GitHub"
            >
                <img src={gitHubIcon} alt="Ícone GitHub" />
            </a>
            <a
                href="https://www.linkedin.com/in/josejunior-dev"
                target="_blank"
                rel="noopener noreferrer"
                title="Visite meu LinkedIn"
            >
                <img src={linkedinIcon} alt="Ícone LinkedIn" />
            </a>
        </RodapeContainer>
    )
}

export default Rodape