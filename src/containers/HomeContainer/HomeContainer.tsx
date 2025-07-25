import ButtonUp from "../../components/Buttons/ButtonUp/ButtonUp"
// import Rodape from "../../components/Footer"
import Home from "../../components/Home"
import Menu from "../../components/Menu"
import Sobre from "../../components/Sobre"
import { Container } from "./ContainerStyle"

const HomeContainer = () => {
    return (
        <Container>
            <Menu />
            <Home />
            <Sobre />
            <ButtonUp />
            {/* <Rodape /> */}
        </Container>
    )
}

export default HomeContainer