//globalStyles

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
    font-family: 'Inter', sans-serif;
    padding: 0;
    margin: 0;
    background-color:#fff;

}

html {
    scroll-behavior: smooth;
    height:100%;
}

body{
    min-height:100vh;
}
a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;   
    font-family: 'Inter', sans-serif;

    /*---------------------------- for inspection of frontend  *start-------------------------------- */
    /* background-color:rgba(27, 245, 49, 0.12);*/
     /* outline: 1px solid red;  */

     /*---------------------------- for inspection of frontend  *end-------------------------------- */
}

img{
    height:100%;
    border-radius:10px;
    width:100%;
}

section{
    margin: 0 auto;
}
@media(max-width: 785px){
    img{
        width:90%;
    }
}
`;

export default GlobalStyle;
