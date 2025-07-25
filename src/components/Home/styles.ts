import styled from "styled-components"

interface ImgContainerProps {
    type: "github" | "linkedin";
}

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    position: relative;
`

export const InfoStack = styled.div`
    position: absolute;
    width: 100%;
    padding: 30px;
    text-align: center;
    h2 {
        font-size: 64px;
        color: #fff;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-weight: 400;
    }

    p {
        color: #b9b9b9ff;
        font-size: 18px;
        margin: 30px 0;
    }

    span {
        color: #00BFFF;
    }
`

export const ListaIcons = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: center;
`

export const ImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    gap: 20px;
    background-color: ${({ type }) =>
        type === "github" ? "#1b1b1bff" :
        type === "linkedin" ? "#0d5381ff" :
        "#ccc"};
    align-items: center;
    height: 64px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    &:hover {
        transform: scale(1.04);
    }
    
    p {
        margin-right: 20px;
        color: #fff;
    }
`