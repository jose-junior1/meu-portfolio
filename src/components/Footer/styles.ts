import styled from "styled-components";

export const RodapeContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #161616ff;
    height: 100px;

    p {
        margin-right: 30px;

        img {
            height: 48px;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.07);
            }
        }
    }
`