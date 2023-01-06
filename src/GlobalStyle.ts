import { createGlobalStyle } from "styled-components";

export const Colors = {
  darkGrey: "#2F3333FF",
  mediumGrey: "#454B4B",
  lightGray: "#535959",
  brightGrey: "#818888",
  boxShadowGrey: "#383d3c",
} as const;

export type ColorName = keyof typeof Colors;

export const ScreenWidths = {
  smallPhone: 425,
  phone: 500,
  tablet: 768,
} as const;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    overflow-y: scroll;
    font-size: 100%;
    @media (max-width: ${ScreenWidths.phone}px) {
      font-size: 55%;
    }
  }

  body {
    height: 100%;
    width: 100%;
    background-color: ${Colors.darkGrey};
    color: white;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #root {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
`;
