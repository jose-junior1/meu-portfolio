import { css } from "styled-components";

export const breakpoints = {
    mobile: (styles: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 768px) {
        ${css(styles, ...args)}
    }
    `,
    tablet: (styles: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1024px) {
        ${css(styles, ...args)}
    }
        `,
}