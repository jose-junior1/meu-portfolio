import styled, {css} from "styled-components";
import { breakpoints } from "../../styles/responsive";

interface MenuProps {
    $aberto: boolean;
    $drop?: boolean
}

export const BotaoHamburguer = styled.button<MenuProps>`
    display: none;
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: #1C1C1C;
    color: #F8F8FF;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    font-size: 30px;
    z-index: 1001;
    border: 2px solid #F8F8FF;

    ${breakpoints.mobile`
        display: block;
    `}

    ${({ $aberto }: MenuProps) =>
    breakpoints.mobile`
        ${$aberto
            ? css`
                top: 10px;
                right: 10px;
            `
            : css`
                top: 10px;
                right: 10px;
        `}
    `}

    ${breakpoints.tablet`
        display: block;
    `}

    ${({ $aberto }: MenuProps) =>
    breakpoints.tablet`
        ${$aberto
            ? css`
                top: 16px;
                right: 16px;
            `
            : css`
                top: 16px;
                right: 16px;
        `}
    `}
`

export const BotaoDropLeft = styled.button<MenuProps>`
    display: block;
    position: fixed;
    top: 16px;
    right: 16px;
    background-color: #0a0a0aff;
    color: #F8F8FF;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
    z-index: 1001;
    border: 2px solid #b4b4b4ff;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.04);
        border-color: #00BFFF;
        color: #00BFFF;
    }

    ${breakpoints.mobile`
        display: none;
    `}

    ${breakpoints.tablet`
        display: none;
    `}
`

export const MenuContainer = styled.nav<MenuProps>`
    position: fixed;
    z-index: 1;
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: 1;
    pointer-events: auto;

    transform: ${({ $drop }: MenuProps) => ($drop ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ $drop }: MenuProps) => ($drop ? 1 : 0)};
    pointer-events: ${({ $drop }: MenuProps) => ($drop ? 'auto' : 'none')};
    width: 100%;
    justify-content: space-around;
    background: rgba(20,20,20,0.95);
    
    ${breakpoints.mobile`
        transform: ${({ $aberto }: MenuProps) => ($aberto ? 'translateY(0)' : 'translateY(-100%)')};
        opacity: ${({ $aberto }: MenuProps) => ($aberto ? 1 : 0)};
        pointer-events: ${({ $aberto }: MenuProps) => ($aberto ? 'auto' : 'none')};
        width: 100%;
        padding: 16px;
        justify-content: space-around;
        background: rgba(20,20,20,0.95);
    `}

    ${breakpoints.tablet`
        transform: ${({ $aberto }: MenuProps) => ($aberto ? 'translateY(0)' : 'translateY(-100%)')};
        opacity: ${({ $aberto }: MenuProps) => ($aberto ? 1 : 0)};
        pointer-events: ${({ $aberto }: MenuProps) => ($aberto ? 'auto' : 'none')};
        width: 100%;
        padding: 16px;
        justify-content: space-around;
        background: rgba(20,20,20,0.95);
    `}
`

export const Logo = styled.h1<MenuProps>`
    position: absolute;
    left: 32px;
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    letter-spacing: -3px;

    ${breakpoints.mobile`
        left: 20px;
        top: 20px;
        font-size: 32px;
    `}

    ${breakpoints.tablet`
        top: 20px;
        left: 20px;
    `}
`

export const NavLinks = styled.ul`
    display: flex;
    gap: 30px;
    cursor: pointer;

    &:last-child {
        margin-right: 16px;
    }

    ${breakpoints.mobile`
        flex-direction: column;
        padding-top: 40px;
        padding-bottom: 30px;
        text-align: center;
    `}

    ${breakpoints.tablet`
        flex-direction: column;
        padding-top: 40px;
        padding-bottom: 30px;
        text-align: center;
    `}
`

export const NavItem = styled.li`
    font-size: 16px;
    color: #fff;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: #00BFFF;
    }
`