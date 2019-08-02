import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #FAFAFA;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
    }

    ul {
      list-style: none;
    }
`;

export default GlobalStyle;
