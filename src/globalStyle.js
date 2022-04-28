import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --maxwidth: 1280px;
        --white: #fff;
        --primary: #e63946;
        --secondary: #457b9d;
        --tertiary: #1d3557;
        --medColor: #a8dadc;
        --fontBigSize: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: "Abel", sans-serif;
      }

    body{
        margin:0;
        padding: 0;

        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--white);
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
