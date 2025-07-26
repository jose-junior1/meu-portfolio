import { Link } from "react-scroll";
import styled from "styled-components";

export const BtnUpProjetos = styled(Link)`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: #15816aff;
    padding: 30px;
    border-radius: 50%;
    bottom: 50px;
    right: 30px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.08);
    }
    img {
        height: 40px;
    }
`