import styled, { createGlobalStyle } from 'styled-components';

export const cores = {
  branca: '#ffffff',
  vermelho: '#E66767',
  creme: '#FFEBD9',
  bege: '#FFF8F2'
};

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelho};
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;