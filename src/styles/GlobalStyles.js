import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html,
    body {
        transition: all 0.3s ease-in-out;
        padding: 0;
        margin: 0;
        line-height: 1.6;
        font-size: 1em;
        overflow-x: none;
        background-image: ${({ theme }) =>
          `url("/images/${theme.colors.backgroundImage}.png")`};
        // background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: "Fira Sans", sans-serif;
        @media (min-width: 768px) {
            font-size: 1.125em;
        }
    }

    h1,
    h2,
    h3 {
        margin: 0;
        padding-bottom: ${({ theme }) => theme.space[6]};
        background: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) =>
          `-webkit-linear-gradient(${theme.colors.secondary}, ${theme.colors.primary})`};
        background: ${({ theme }) =>
          `linear-gradient(${theme.colors.secondary}, ${theme.colors.primary})`};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      margin: 0;
    }

    p {
        margin: 0;
        padding: 0.2rem 0 0.8rem 0;
        font-weight: 400;
        letter-spacing: 0.03em;
        line-height: 1.25em;

        a {
          color: ${({ theme }) => theme.colors.text};
          padding-bottom: 5px;
          border-bottom: 2px dotted ${({ theme }) => theme.colors.primary};
          transition: all 0.5s ease-in-out;

          &:hover, &:active {
            color:${({ theme }) => theme.colors.secondary};
            border-color: ${({ theme }) => theme.colors.primary};
          }
        }
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &::-moz-focus-inner {
        border: 0;
      }
    }

    a {
      text-decoration: none;
    }
`

export default GlobalStyles
