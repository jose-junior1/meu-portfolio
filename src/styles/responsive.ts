import { css } from "styled-components";

export const breakpoints = {
    mobile: (styles: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 767px) {
        ${css(styles, ...args)}
    }
    `,
    tablet: (styles: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: 768px) and (max-width: 1024px) {
        ${css(styles, ...args)}
    }
        `,
}