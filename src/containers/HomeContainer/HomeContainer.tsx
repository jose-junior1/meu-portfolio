import ButtonUp from "../../components/Buttons/ButtonUp/ButtonUp"
import Contato from "../../components/Contato"
import Credits from "../../components/Credits"
import Rodape from "../../components/Footer"
import Home from "../../components/Home"
import Menu from "../../components/Menu"
import Projetos from "../../components/Projetos"
import Sobre from "../../components/Sobre"
import { Container } from "./ContainerStyle"

const HomeContainer = () => {
    return (
        <Container>
            <Menu />
            <Home />
            <Sobre />
            <Projetos />
            <Contato />
            <Credits />
            <ButtonUp />
            <Rodape />
        </Container>
    )
}

export default HomeContainer