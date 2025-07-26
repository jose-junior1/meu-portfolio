import * as S from "./styles"
import { Link } from "react-scroll"

const Menu = () => {
    return (
        <S.MenuContainer>
            <S.Logo>
                J <span>J</span>
            </S.Logo>
            <S.NavLinks>
                <S.NavItem>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </S.NavItem>
                <S.NavItem>
                    <Link to="sobre" smooth={true} duration={500}>Sobre</Link>
                </S.NavItem>
                <S.NavItem>
                    <Link to='projetos' smooth={true} duration={500}>Projetos</Link>
                </S.NavItem>
                <S.NavItem>
                    <Link to='contato' smooth={true}duration={500}>Contato</Link>
                </S.NavItem>
            </S.NavLinks>
        </S.MenuContainer>
    )
}

export default Menu