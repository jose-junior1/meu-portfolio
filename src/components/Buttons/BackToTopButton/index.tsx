import { useLocation } from 'react-router-dom'

import btnUp from '../../../assets/img/icons/arrow-up.png'

import { ScrollButton } from './styles'

const BackToTopButton = () => {
    const location = useLocation()

    const homePage = location.pathname === '/'
    const projectsPage = location.pathname === '/projects'
    
    return (
        <ScrollButton to={homePage ? 'hero' : projectsPage ? 'start' : ''} smooth={true} duration={500} title='Subir'>
            <img src={btnUp} alt="Subir" />
        </ScrollButton>
    )
}

export default BackToTopButton