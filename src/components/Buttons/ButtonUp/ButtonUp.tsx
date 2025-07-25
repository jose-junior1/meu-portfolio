import btnUp from '../../../assets/img/icons/arrow-up.png'
import { BtnUp } from './styles'

const ButtonUp = () => {
    return (
        <BtnUp to='home' smooth={true} duration={500}>
            <img src={btnUp} alt="Subir" />
        </BtnUp>
    )
}

export default ButtonUp