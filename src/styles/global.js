import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

@import "antd/dist/antd.css";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        ::-webkit-scrollbar {
        display: none;
        }
    }

    `;

/* :root {
        --color-primary: ;
        --color-primary-strong: ;
        --color-secondary: ;
        --color-secondary-light: ;
        --color-secondary-strong: ;
        --gray-100: ;
        --gray-50: ;
        --gray-20: ;
        --gray-0: ;
        --white: ;
        --black: ;
        --negative: ;
        --warning: ;
        --success: ;
        --information: ;
    }
    body {
        font-family: ;
    }
    
    h1 {

    }
    h2 {

    }
    h3 {

    }
    span {

    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: ;
    }
    button {


        cursor: pointer;
    }
    input {

    }
    a {

        text-decoration: none;
    }
`; */
