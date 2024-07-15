import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Fundo = styled.header`
  height: 163px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 58px;
  margin-top: 40px;

  p {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;

    &.carrinho {
      cursor: pointer;
    }
  }

  img {
    height: 57.5px;
    width: 125px;

    margin-left: 88px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 8px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;