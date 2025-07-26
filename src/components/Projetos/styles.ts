import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0,0.6);
    color: #f1f1f1;
    position: relative;
    overflow-y: auto;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    gap: 10px;

    h2 {
        border-bottom: 2px solid #00BCD4;
        padding-bottom: 10px;
        text-align: left;
    }
`

export const Card = styled.a`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #1b1a1aff;
    padding: 16px 30px;
    position: relative;
    transition: transform 0.2s ease-in-out;
    border-radius: 5px;
    
    &:hover {
        transform: scale(1.02);
        border: 1px solid #00BCD4;
    }

    p {
        font-size: 18px;
    }

    img {
        position: absolute;
        right: 16px;
        height: 40px;
    }
`

export const BtnProjects = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    color: #fff;
    background-color: #363636;
    padding: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    width: 260px;
    text-align: center;

    &:hover {
        transform: scale(1.05);
    }

    img {
        height: 36px;
    }
`