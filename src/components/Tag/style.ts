
import styled from 'styled-components';
import { cores } from '../../styles';

import { Props } from '.';

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.creme};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  display: inline-block;
  margin-left: 8px;
`;
