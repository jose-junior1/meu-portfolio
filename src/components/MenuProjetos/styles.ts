import { Link } from "react-router-dom"
import styled from "styled-components"


export const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    background-color: rgba(27,27,27,0.9);
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 16px;
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

    img {
        height: 36px;
    }
`