import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --grey-50: #999999;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
        --white: #ffffff;
       
    }
    
    body {
        /* background: ; */
        font-family: 'Inter', sans-serif;
    }
    border-list-style, input, button {

    }
    h1, h2, h3, h4, h5, h6 {

    }
    
    button {
        cursor: pointer;
    }

    button:hover{
        opacity: 0.9;
    }

`;