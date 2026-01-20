import Header from "../../components/Headers/HomeHeader"
import FullGallery from "../../components/Sections/FullGallery"
import BackToTopButton from "../../components/Buttons/BackToTopButton"
import Footer from "../../components/Footer"

import { Container } from "./ContainerStyle"

const ProjetosContainer = () => {
    return (
        <Container>
            <Header showMenu={true} showDrop={true} />
            <FullGallery />
            <BackToTopButton />
            <Footer />
        </Container>
    )
}

export default ProjetosContainer