import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Fundo = styled.div`
  width: 100vw;
  height: 360px;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
    height: 280px;
  }

  .container {
    max-width: 539px;
    max-height: 84px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    p {
      font-size: 36px;
      font-weight: 900;
      margin-top: 138px;
      line-height: 42px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
        line-height: 24px;
        margin-top: 98px;
      }
    }

    img {
      margin-top: 40px;
    }
  }
`;
