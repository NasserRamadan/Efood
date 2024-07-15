import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export const ImageHeader = styled.div`
  width: 100%;
  height: 280px;
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: brightness(0.5);
  }
`;
export const Container = styled.div`
  position: absolute;
  top: 25px;
  margin-left: calc((100vw - 1024px) / 2);
  text-align: left;
  width: 1024px;
  height: 280px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100vw;
    margin-left: 10vw;
  }
`;

export const Tipo = styled.div`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
`;

export const ShopName = styled.div`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 900;
`;