import { createGlobalStyle } from 'styled-components';
import { animations } from './animations';
import { base } from './base';
import { typography } from './typography';

const GlobalStyles = createGlobalStyle`
  ${base}
  ${typography}
  ${animations}
`;

export default GlobalStyles;
