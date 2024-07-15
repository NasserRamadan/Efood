import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ContainerShops = styled.section`
  padding: 80px 0 0;
`;

export const List = styled.ul`
  display: grid;
  max-width: 1024px;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;
