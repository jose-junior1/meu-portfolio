import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    color: #f1f1f1;
    position: relative;

    ${breakpoints.mobile`
        padding: 24px;
    `}
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
`

export const ContainerCard = styled.div`
    overflow: hidden;
`

export const Card = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1b1a1aff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 1px solid transparent;
    
    &:hover {
        transform: scale(1.02);
        border: 1px solid #00BCD4;
    }

    p {
        font-size: 18px;
    }

    img {
        height: 30px;
    }

    ${breakpoints.mobile`
        width: 100%;
        gap: 20px;

        img {
        }
    `}
`

export const BtnProjects = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto 0 auto;
    gap: 30px;
    color: #fff;
    background-color: #21613c;
    padding: 16px;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border: 2px solid black;

    &:hover {
        transform: scale(1.05);
    }

    img {
        height: 36px;
        position: absolute;
        left: 16px;
    }

    ${breakpoints.mobile`
        width: 100%;
        background-color: #21613c;
        gap: 50px;

        img {
        }
    `}
`