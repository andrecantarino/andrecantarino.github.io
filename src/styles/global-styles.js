import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundPrimary: rgba(29,27,25,.95);
    --textPrimary: #987750;
    --textSecondary: #888;
    --mobileBreakpoint: 480px;
    --tabletBreakpoint: 768px;
    --smallScreenBreakpoint: 1024px;
    --desktopBreakpoint: 1200px;
    --largeScreenBreakpoint: 1201px;
  }

  .text {
    font-size: 1rem;
    color: var(--textSecondary);
  }
`

export default GlobalStyles;