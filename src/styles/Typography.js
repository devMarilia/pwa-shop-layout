import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html{
    font-family: 'Poppins', sans-serif;
    color: var(--grey);
  }
  *{
    font-family: 'Poppins', sans-serif;
    color: var(--grey);
  }
  h1,h2,h3,h4,h5,h6{
   font-family: 'Poppins', sans-serif'
  }
`;

export default Typography;
