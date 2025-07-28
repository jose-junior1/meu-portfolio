import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../styles/responsive";

const pulsar = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.04);
    }
`;

const moveGradient = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    color: #f1f1f1;
    position: relative;
    overflow-y: hidden;
    padding: 100px 0;

    h2 {
        border-bottom: 2px solid #00BCD4;
        padding-bottom: 10px;
        text-align: left;
    }

    ${breakpoints.mobile`
        padding: 100px 16px;

        h2 {
            text-align: center;
        }
    `}
`

export const Content = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;

    ${breakpoints.mobile`
        display: block;
    `}

    ${breakpoints.tablet`
        width: 70%;
        grid-template-columns: 1fr 1fr;
    `}
`

export const BtnGitHub = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto 0 auto;
    background: #005f99;
    border: 2px solid #010d1fff;
    padding: 16px;
    border-radius: 10px;
    color: #fff;
    text-shadow: 0 0 5px rgba(0,0,0,0.4);
    background: linear-gradient(270deg, #01253b, #015c94ff, #01253b);
    background-size: 600% 600%;
    animation: ${moveGradient} 10s ease infinite;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        border-color: #00cccc;
    }

    img {
        height: 30px;
    }

    
    ${breakpoints.mobile`
        font-size: 18px;
        background: linear-gradient(90deg, #01253b 0%, #035181ff 100%);
        animation: ${pulsar} 1.4s ease-in-out infinite;
        border: none;
        
        img {
            height: 50px
        }
    `}
`