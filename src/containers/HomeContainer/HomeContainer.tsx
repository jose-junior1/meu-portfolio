import Header from "../../components/Headers/HomeHeader"
import Hero from "../../components/Sections/Hero"
import About from "../../components/Sections/About"
import FeaturedProjects from "../../components/Sections/FeaturedProjects"
import ContactMethods from "../../components/Sections/ContactMethods"
import Credits from "../../components/Sections/Credits"
import BackToTopButton from "../../components/Buttons/BackToTopButton"
import Footer from "../../components/Footer"

import { Container } from "./ContainerStyle"

const HomeContainer = () => {
    return (
        <Container>
            <Header showMenu={false} showDrop={true} />
            <Hero />
            <About />
            <FeaturedProjects />
            <ContactMethods />
            <Credits />
            <BackToTopButton />
            <Footer />
        </Container>
    )
}

export default HomeContainer