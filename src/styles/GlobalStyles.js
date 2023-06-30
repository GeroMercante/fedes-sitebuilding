import { createGlobalStyle } from "styled-components";

import Sohne from "../assets/fonts/SohneRegular.otf";
import SohneLeicht from "../assets/fonts/Sohneleicht.otf";
import SohneBold from "../assets/fonts/SohneBold.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Sohne';
    src: url(${Sohne});
  }

  @font-face {
    font-family: 'SohneLeicht';
    src: url(${SohneLeicht});
  }

  @font-face {
    font-family: 'SohneBold';
    src: url(${SohneBold});
  }

  *,*::after,*::before,body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: 'Sohne';
  }


  h1,h2,h3,
  h4,h5,h6
  ,p,button,a{
    margin: 0;
  }

  a{
    text-decoration: none;
  }

  a:hover{
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  @media screen and (max-width: 700px) {
    *,*::after,*::before,body{
    overflow: visible;
  }
  }
`;

export default GlobalStyles;
