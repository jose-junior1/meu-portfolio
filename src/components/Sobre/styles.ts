import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const ContainerSobre = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(27, 26, 26, 1);
    color: #f1f1f1;
    
    ${breakpoints.mobile`
        padding: 24px;

        .p-ocult {
            display: none;
        }
    `}

    ${breakpoints.tablet`
        width: 100%;
        line-height: 40px;
        padding: 24px;
    `}
`

export const ContainerTexto = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    text-align: justify;

    div {
        padding: 50px 0;
    }

    p {
        color: #e0e0e0;
        margin-bottom: 10px;
        word-spacing: 6px;
        font-size: 18px;
    }

    ${breakpoints.tablet`  
        width: 100%;                                                                
        padding: 24px;            
    `}

    ${breakpoints.mobile`
        text-align: left;
    `}
`

export const BtnDownload = styled.a`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 180px;
    margin: 16px auto;
    border-radius: 10px;
    background-color: #21613cff;
    padding: 16px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    img {
        height: 16px;
    }
`