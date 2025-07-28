import styled from "styled-components"
import { breakpoints } from "../../styles/responsive";

interface ImgContainerProps {
    type: "github" | "linkedin";
}

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgba(0,0,0,0.6);

    ${breakpoints.mobile`
        width: 100%;
        padding: 24px;
        height: 100%;
    `}

    ${breakpoints.tablet`
        width: 100%;
        padding: 24px;
        height: 100%;
    `}
`

export const Text = styled.div`
    p {
        color: #b9b9b9ff;
        font-size: 24px;
        margin: 30px 0;

        ${breakpoints.mobile`
            font-size: 18px;
        `}
    }
`

export const InfoStack = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 30px;
    width: 800px;
    padding: 30px;
    text-align: center;

    h2 {
        font-size: 64px;
        font-weight: 400;

        ${breakpoints.mobile`
            font-size: 48px;
        `}
    }

    ${breakpoints.mobile`
        display: block;
        width: 100%
    `}

    ${breakpoints.tablet`
        display: block;
    `}
`

export const CardAvatar = styled.div`
    position: relative;
    padding: 16px;
    width: 300px;
    height: 300px;
    border-radius: 8px;

    &::after, &::before {
        position: absolute;
        border: 3px solid #00d9ffff;
        height: 100px;
        width: 100px;
        content: '';
    }

    &::before {
        top: 0;
        left: 0;
        border-right: none;
        border-bottom: none;
    }

    &::after {
        bottom: 0;
        right: 0;
        border-left: none;
        border-top: none;
    }

    ${breakpoints.mobile`
        margin: 0 auto;
        width: 100%
    `}

    ${breakpoints.tablet`
        margin: 50px auto 0 auto
    `}
`

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
    border-radius: 8px;
`

export const ListaIcons = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: center;

    li {
        width: 220px;
    }

    ${breakpoints.mobile`
        li {
            width: auto;
            padding-bottom: 30px;
        }
    `}
`

export const ImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    gap: 30px;
    background-color: ${({ type }) =>
        type === "github" ? "#1b1b1bff" :
    type === "linkedin" ? "#0d5381ff" :
        "#ccc"};
    align-items: center;
    height: 64px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    margin-top: 30px;

    &:hover {
        transform: scale(1.04);
    }
    
    p {
        color: #fff;
        letter-spacing: 5px;
    }

    ${breakpoints.mobile`
        padding: 16px;
        background: none;

        p {
            display: none;
            font-size: 14px;
            letter-spacing: 5px;
        }
    `}
`