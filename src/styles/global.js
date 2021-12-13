import { createGlobalStyle } from "styled-components";

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
    
    :root {
        --color-primary: #757BC8 ;
        --white: #FFF ;
        --black: #121212; 
}
    
    /*
    --color-primary-strong: ;
    --color-secondary: ;
    --color-secondary-light: ;
    --color-secondary-strong: ;
    --gray-100: ;
    --gray-50: ;
    --gray-20: #F1F1EF ;
    --gray-0: ;
    --negative: ;
    --warning: ;
    --success: ;
    --information: ;
    */
}
body {
    font-family: 'Roboto', sans-serif;
}
`;
/*
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
