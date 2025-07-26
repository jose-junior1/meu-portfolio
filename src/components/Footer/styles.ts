import styled from "styled-components";

export const RodapeContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #161616ff;
    padding: 16px;
    gap: 30px;

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
    `