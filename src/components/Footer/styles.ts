import styled from 'styled-components';
import { cores } from '../../styles';

export const Fundo = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${cores.creme};
  margin-top: 120px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;

  p {
      max-width: 480px;
      max-height: 24px;
      margin-top: 80px;
      line-height: 12px;
      margin: 0 auto;
      margin-top: 80px;
    }

  img {
      margin-top: 40px;
      align-items: center;

    }

  .media {
      display: flex;
      justify-content: center;
      gap: 8px;
    }
  }
`;