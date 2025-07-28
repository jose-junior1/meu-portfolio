import { BtnBackToHome, Header, Logo } from "./styles"

export const MenuProjetos = () => {
    return (
        <Header>
            <Logo>J <span>J</span></Logo>
            <BtnBackToHome to='/'>
                Voltar para a página inicial
            </BtnBackToHome>
        </Header>
    )
}

export default MenuProjetos