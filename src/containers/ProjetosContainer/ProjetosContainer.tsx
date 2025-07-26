import ButtonUpProjetos from "../../components/Buttons/ButtonUpProjetos"
import Rodape from "../../components/Footer"
import ListagemProjetos from "../../components/ListagemProjetos"
import Menu from "../../components/MenuProjetos"
import { Container } from "./ContainerStyle"

const ProjetosContainer = () => {
    return(
        <Container>
            <Menu />
            <ListagemProjetos />
            <ButtonUpProjetos />
            <Rodape />
        </Container>
    )
}

export default ProjetosContainer