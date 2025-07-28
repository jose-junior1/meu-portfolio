import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const RodapeContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #161616ff;
    padding: 16px;
    gap: 30px;
    position: relative;
    width: 100%;

    p {
        margin-right: 30px;

    }
    
    a {
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.07);
        }
    }

    img {
        height: 40px;
        cursor: pointer;
    }

    ${breakpoints.mobile`
        width: 100%;
        justify-content: right;
    `}
`

export const Logo = styled.h2`
    position: absolute;
    left: 16px;
    top: 16px;
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    letter-spacing: -3px;
`