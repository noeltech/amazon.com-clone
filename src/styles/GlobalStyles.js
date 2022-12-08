import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
//RESET

  html {
    
    // CSS RESET 
    ${normalize}

    --clr-bg-test: red;
    --clr-primary: #131921;
    --clr-secondary: #232f3e;
    --clr-text-light-500 : #ffff;
    --clr-text-light-400 : #FBFBFC;

    font-family:  'Open Sans', sans-serif;

    /* width:100%;
    overflow:hidden; */
    
  }

body{
  width:100%;
  min-height: 100vh;
 
  /* border: 1px solid pink; */
  
}


#root{
  width: 100%;
  height:100%;
 
}

  ul{
  list-style:none;
  padding:0;
  margin:0;
}
`;
