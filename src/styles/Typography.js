import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html{
    font-family: 'Poppins', sans-serif;
    color: var(--black);
  }
  *{
    font-family: 'Poppins', sans-serif;
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6{
   font-family: 'Poppins', sans-serif'
  }
`;

export default Typography;
