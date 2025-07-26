import styled from "styled-components";

export const ContainerSobre = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #1b1a1aff;
    color: #f1f1f1;
`

export const ContainerTexto = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    text-align: justify;
    
    div {
        position: relative;
        padding: 24px;
        
        &::before, &::after {
            content: '';
            position: absolute;
            width: 80px; 
            height: 80px;
            border: 2px solid #00BCD4;
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
    }

    p {
        color: #e0e0e0;
        margin-bottom: 10px;
        word-spacing: 6px;
        font-size: 18px;
    }
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