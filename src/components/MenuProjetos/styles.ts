import { Link } from "react-router-dom"
import styled from "styled-components"
import { breakpoints } from "../../styles/responsive"


export const Header = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${breakpoints.mobile`
        justify-content: center;
        background: rgba(20,20,20,0.95);
    `}
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

    ${breakpoints.mobile`
        font-size: 32px;
        left: 0;
    `}
`

export const BtnBackToHome = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px;
    color: #fff;
    background-color: #008080;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    text-align: center;

    &:hover {
        transform: scale(1.05);
    }

    ${breakpoints.mobile`
        padding: 8px;
    `}
`