import ButtonUpProjetos from "../../components/Buttons/ButtonUpProjetos"
import Rodape from "../../components/Footer"
import ListagemProjetos from "../../components/ListagemProjetos"
import Menu from "../../components/Menu"
import { Container } from "./ContainerStyle"

const ProjetosContainer = () => {
    return(
        <Container>
            <Menu mostrarMenu={true} mostrarDrop={true} />
            <ListagemProjetos />
            <ButtonUpProjetos />
            <Rodape />
        </Container>
    )
}

export default ProjetosContainer