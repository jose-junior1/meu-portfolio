import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Card = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 500px;
    width: 100%;
    height: 180px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 1px solid black;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    
    &:hover {
        transform: scale(1.02);
        border: 1px solid #00BCD4;
    }
    
    .banner {
        width: 200px;
    }
    `

export const CardLink = styled.a`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background-color: rgba(0, 0, 0, 0.8);

    p {
        font-size: 1em;
    }

    img {
        height: 30px;
    }

    ${breakpoints.mobile`
        height: 30%;
        padding: 8px;

        img {
            height: 24px;
        }
    `}

    ${breakpoints.tablet`
        height: 40%;

        img {
            height: 24px;
        }
    `}
`