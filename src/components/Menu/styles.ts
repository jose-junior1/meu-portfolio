import styled from "styled-components";

export const MenuContainer = styled.nav`
    position: fixed;
    z-index: 1;
    width: 100%;
    padding: 32px;
    background-color: rgba(27,27,27,0);
    display: flex;
    justify-content: right;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`

export const Logo = styled.h1`
    position: absolute;
    left: 32px;
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    letter-spacing: -3px;
`

export const NavLinks = styled.ul`
    display: flex;
    gap: 30px;
    cursor: pointer;
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