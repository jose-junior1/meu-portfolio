import { useState } from "react"
import { Link } from "react-scroll"

import { ProjectsHeader } from "../ProjectsHeader/index"

import * as S from "./styles"

type Props = {
    showMenu: boolean
    showDrop: boolean
}

const HomeHeader = ({ showMenu, showDrop }: Props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [isMenuDrop, setIsMenuDrop] = useState(false)
    const [showX, setShowX] = useState(false)
    const [showArrow, setShowArrow] = useState(false)

    const toggleMenu = () => {
        if (isMobileMenu) {
            setShowX(false)
            setIsMobileMenu(false)
        } else {
            setIsMobileMenu(true)
            setTimeout(() => setShowX(true), 300)
        }
    }

    const toggleDropMenu = () => {
        if (isMenuDrop) {
            setShowArrow(false)
            setIsMenuDrop(false)
        } else {
            setIsMenuDrop(true)
            setTimeout(() => setShowArrow(true), 300)
        }
    }

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (
            e.propertyName === 'transform' &&
            e.target instanceof HTMLElement &&
            e.target.tagName === 'NAV' &&
            isMobileMenu
        ) {
            setShowX(true)
            setShowArrow(false)
        }
    }

    const closeMenu = () => {
        if (isMobileMenu) {
            setIsMobileMenu(false)
            setShowX(false)
        }
        if (isMenuDrop) {
            setIsMenuDrop(false)
            setShowArrow(false)
        }
    }

    return (
        <>
            <S.MobileMenuButton
                type="button"
                $aberto={isMobileMenu}
                onClick={toggleMenu}
                aria-label={isMobileMenu ? 'Fechar menu' : 'Abrir menu'}
                title={isMobileMenu ? 'Fechar menu' : 'Abrir menu'}
            >
                {showX ? 'X' : '☰'}
            </S.MobileMenuButton>
            <S.DropLeftButton
                type="button"
                $aberto={isMenuDrop}
                onClick={toggleDropMenu}
                aria-label={isMenuDrop ? 'Fechar menu' : 'Abrir menu'}
                title={isMenuDrop ? 'Fechar menu' : 'Abrir menu'}
            >
                {showArrow ? '>' : '<'}
            </S.DropLeftButton>
            <S.MenuContainer
                $drop={isMenuDrop}
                $aberto={isMobileMenu}
                onTransitionEnd={handleTransitionEnd}
            >
                {showMenu ? (
                    <ProjectsHeader />
                ) : !showMenu ? (
                    <>
                        <S.Logo $aberto={isMobileMenu} $drop={isMenuDrop}>
                            J <span>J</span>
                        </S.Logo>
                        <S.NavLinks>
                            <S.NavItem>
                                <Link
                                    to='hero'
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    spy={true}
                                    activeClass="link-ativo"
                                    title="Home"
                                >
                                    Início
                                </Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link
                                    to="about"
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
                                    to='featured-projects'
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
                                    to='contact-methods'
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
                                    to='credits'
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
                ) : !showDrop && (
                    <>
                        <S.Logo $aberto={false} $drop={isMenuDrop}>
                            J <span>J</span>
                        </S.Logo>
                        <S.NavLinks>
                            <S.NavItem>
                                <Link to='hero' smooth={true} duration={500} onClick={closeMenu}>Início</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to="about" smooth={true} duration={500} onClick={closeMenu}>Sobre</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to='featured-projects' smooth={true} duration={500} onClick={closeMenu}>Projetos</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to='contact-methods' smooth={true} duration={500} onClick={closeMenu}>Contato</Link>
                            </S.NavItem>
                            <S.NavItem>
                                <Link to='credits' smooth={true} duration={500} onClick={closeMenu}>Créditos</Link>
                            </S.NavItem>
                        </S.NavLinks>
                    </>
                )}
            </S.MenuContainer>
        </>
    )
}

export default HomeHeader