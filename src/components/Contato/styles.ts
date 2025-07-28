import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const ContainerContato = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #1b1a1aff;
    color: #f1f1f1;
    text-align: center;

    ${breakpoints.mobile`
        padding: 24px;
    `}
`

export const Content = styled.div`
    margin: 0 auto;
    width: 800px;

    h2 {
        font-size: 40px;
    }

    a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 24px;
        background-color: #242323ff;
        font-size: 18px;
        margin: 50px auto 20px auto;
        border-radius: 8px;
        width: 50%;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        border: 1px solid transparent;

        &:hover {
            transform: scale(1.02);
            border: 1px solid #00BCD4;
        }

        img {
            height: 40px;
            width: 40px;
            position: absolute;
            left: 16px;
        }
    }

    ${breakpoints.mobile`
        width: 100%;

        a {
            width: 100%;
            justify-content: center;
        }

        a:last-child{
            justify-content: right;
        }
    `}
`