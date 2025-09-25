import btnUp from '../../../assets/img/icons/arrow-up.png'
import { BtnUpProjetos } from './styles'

const ButtonUpProjetos = () => {
    return (
        <BtnUpProjetos to='start' smooth={true} duration={500} title='Subir'>
            <img src={btnUp} alt="Subir" />
        </BtnUpProjetos>
    )
}

export default ButtonUpProjetos