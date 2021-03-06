import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  background-color: #6D7CE4;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  &::-webkit-scrollbar {
    width: 0px;
  }
}
button {
  box-shadow: 3px 3px 10px 0px rgba(69, 84, 188, 0.75);

  &:active {
    filter: brightness(1.1);
  }
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

export default GlobalStyle;
