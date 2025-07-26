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
            <p>
                <img src={gitHubIcon} alt="Ícone GitHub" />
            </p>
            <p>
                <img src={linkedinIcon} alt="Ícone LinkedIn" />
            </p>
        </RodapeContainer>
    )
}

export default Rodape