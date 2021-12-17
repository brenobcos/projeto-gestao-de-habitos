import { createGlobalStyle } from "styled-components";

import "antd/dist/antd.css";

export default createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        ::-webkit-scrollbar {
        display: none;

        }
    }

body {

}

:root {
    --color-primary: #757BC8 ;
    --white: #FFF ;
    --black: #121212; 
}
`;
