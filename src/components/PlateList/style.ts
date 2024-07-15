import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ContainerShops = styled.ul`
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

export const List = styled.li`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  gap: 32px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: center;
  }
`;
