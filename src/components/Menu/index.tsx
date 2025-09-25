import { useState } from "react"
import * as S from "./styles"
import { Link } from "react-scroll"
import { MenuProjetos } from "../MenuProjetos/index"

type Props = {
    mostrarMenu: boolean
    mostrarDrop: boolean
}

const Menu = ({ mostrarMenu, mostrarDrop } :Props) => {
    const [menuHambAberto, setMenuHambAberto] = useState(false)
    const [menuDrop, setMenuDrop] = useState(false)
    const [mostrarX, setMostrarX] = useState(false)
    const [mostrarArrow, setMostrarArrow] = useState(false)
    // const [fechaMenu, setFechaMenu] = useState(false)

    const mostrarIcone = () => {
        if (menuHambAberto) {
            setMostrarX(false)
            setMenuHambAberto(false)
        } else {
            setMenuHambAberto(true)
            setTimeout(() => setMostrarX(true), 300)
        }
    }

    const mostrarSetaIcone = () => {
        if (menuDrop) {
            setMostrarArrow(false)
            setMenuDrop(false)
        } else {
            setMenuDrop(true)
            setTimeout(() => setMostrarArrow(true), 300)
        }
    }

    const menu = (e: React.TransitionEvent) => {
    if (
        e.propertyName === 'transform' &&
        e.target instanceof HTMLElement &&
        e.target.tagName === 'NAV' &&
        menuHambAberto
        ) {
            setMostrarX(true)
            setMostrarArrow(false)
        }
    }

    const closeMenu = () => {
        if(menuHambAberto) {
            setMenuHambAberto(false)
            setMostrarX(false)
        }
        if(menuDrop) {
            setMenuDrop(false)
            setMostrarArrow(false)
        }
    }

    return (
        <>
            <S.BotaoHamburguer
                type="button"
                $aberto={menuHambAberto}
                onClick={mostrarIcone}
                aria-label={menuHambAberto ? 'Fechar menu' : 'Abrir menu'}
                title={menuHambAberto ? 'Fechar menu' : 'Abrir menu'}
            >
                {mostrarX ? 'X' : '☰'}
            </S.BotaoHamburguer>
            <S.BotaoDropLeft
                type="button"
                $aberto={menuDrop}
                onClick={mostrarSetaIcone}
                aria-label={menuDrop ? 'Fechar menu' : 'Abrir menu'}
                title={menuDrop ? 'Fechar menu' : 'Abrir menu'}
            >
                {mostrarArrow ? '>' : '<'}
            </S.BotaoDropLeft>
            <S.MenuContainer
                $drop={menuDrop}
                $aberto={menuHambAberto}
                onTransitionEnd={menu}
            >
                {mostrarMenu ? (
                    <MenuProjetos />
                ) : !mostrarMenu ? (
                    <>
                        <S.Logo $aberto={menuHambAberto} $drop={menuDrop}>
                            J <span>J</span>
                        </S.Logo>
                        <S.NavLinks>
                            <S.NavItem>
                                <Link 
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    spy={true}
                                    activeClass="link-ativo"
                                    title="Home"
                                >
                                    Home
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link
                                    to="sobre"
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    spy={true}
                                    activeClass="link-ativo"
                                    title="Sobre"
                                >
                                    Sobre
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link
                                    to='projetos'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    spy={true}
                                    activeClass="link-ativo"
                                    title="Projetos"
                                >
                                    Projetos
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link
                                    to='contato'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    spy={true}
                                    activeClass="link-ativo"
                                    title="Contato"
                                >
                                    Contato
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link
                                    to='creditos'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    spy={true}
                                    activeClass="link-ativo"
                                    title="Créditos"
                                >
                                    Créditos
                                </Link>
                            </S.NavItem>
                        </S.NavLinks>
                    </>
                ) : !mostrarDrop && (
                    <>
                        <S.Logo $aberto={false} $drop={menuDrop}>
                            J <span>J</span>
                        </S.Logo>
                        <S.NavLinks>
                            <S.NavItem>
                                <Link to='home' smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to="sobre" smooth={true} duration={500} onClick={closeMenu}>Sobre</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to='projetos' smooth={true} duration={500} onClick={closeMenu}>Projetos</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to='contato' smooth={true}duration={500} onClick={closeMenu}>Contato</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to='creditos' smooth={true}duration={500} onClick={closeMenu}>Créditos</Link>
                            </S.NavItem>
                        </S.NavLinks>
                    </>
                )}
            </S.MenuContainer>
        </>
    )
}

export default Menu