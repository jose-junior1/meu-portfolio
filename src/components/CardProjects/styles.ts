import styled from "styled-components";
import { breakpoints } from "../../styles/responsive";

export const Card = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 500px;
    width: 100%;
    height: 180px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    border: 1px solid rgba(0, 0, 0, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    
    &:hover {
        transform: scale(1.02);
        border-color: #00BCD4;
    }
    
    .banner {
        width: 200px;
    }

    ${breakpoints.mobile`
        border: none;

        &:hover {
            border-color: none;
            transform: none;
        }
    `}

    ${breakpoints.tablet`
        border: none;
        
        &:hover {
            border-color: none;
            transform: none;
        }
    `}
`

export const CardLink = styled.a`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 8px 8px;
    cursor: pointer;

    p {
        font-size: 1em;
    }

    img {
        height: 30px;
    }

    ${breakpoints.mobile`
        height: 30%;
        padding: 8px;

        img {
            height: 24px;
        }
    `}

    ${breakpoints.tablet`
        height: 40%;

        img {
            height: 24px;
        }
    `}
`

export const BtnStacks = styled.button`
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: 1;
    pointer-events: all;
    border: none;
    border-radius: 6px;
    padding: 4px 8px;
    background-color: #00e969ff;
    color: #111;
    font-weight: bold;
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;

    &.visible {
        opacity: 0;
        pointer-events: none;
    }

    &.hiding {
        opacity: 0;
        pointer-events: none;
        transform: translateY(-100%);
    }
`

export const Stacks = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    padding-left: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    pointer-events: none;

    button {
        padding: 0 6px;
        background-color: transparent;
        background-color: red;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-weight: bold;
    }

    &.visible {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
    }

    &.hiding {
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
    }
`

export const StackTag = styled.span<{stack: string}>`
    padding: 2px 6px;
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 12px;
    color: #fff;
    box-shadow: 4px 4px 8px rgba(1, 1, 1, 0.5);

    ${({stack}) => {
        switch(stack.toLowerCase()) {
            case "react":
                return `
                    background-color: #61DBFB;
                    color: #111;
                `
            case "typescript":
                return `
                    background-color: #3178c6;
                `
            case "javascript":
                return `
                    background-color: #f7df1e;
                    color: #000;
                `;
            case "vue":
                return `
                    background-color: #41b883;
                `
            case "styled-components":
                return `
                    background-color: #db7093;
                `
            case "scss":
            case "sass":
                return `
                    background-color: #c6538c;
                `
            case "less":
                return `
                    background-color: #072752ff;
                ` 
            case "redux":
                return `
                    background-color: #BA53D2;
                `
            case "bootstrap":
                return `
                    background-color: #8453d2ff;
                `
            case "html":
                return `
                    background-color: #cf5821ff;
                `
            case "css":
                return `
                    background-color: #3a74ccff;
                `
            case "gulp.js":
                return `
                    background-color: #bd4949ff;
                `
            case "grunt.js":
                return `
                    background-color: #df9c0aff;
                    color: #5f2301ff;
                `
            case "jquery":
                return `
                    background-color: #3a74ccff;
                    color: #111;
                `
            default:
                return `
                    border-color: #fff;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: #00bcd4;
                `
        }
    }}
`