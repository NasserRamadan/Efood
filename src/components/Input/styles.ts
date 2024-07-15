import styled from 'styled-components';
import { cores } from '../../styles';

export const Container = styled.div`
  background-color: transparent;
  color: ${cores.creme};
  padding: 0;
  border-radius: 0;
  margin-bottom: 8px;

  > p {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
  }
`;
