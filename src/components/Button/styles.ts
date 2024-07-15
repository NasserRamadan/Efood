import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.creme};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
`;

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.creme};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
  margin-bottom: 8px;
  margin-left: 8px;
  width: 82px;
  height: 24px;
  position: absolute;
  top: 388px;
`;
export const ButtonAdd = styled(Link)`
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0px;
  text-decoration: none;
  text-align: center;
  margin: 0 8px;
`;

export const ButtonCar = styled.button`
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 7px;
  border: none;
  cursor: pointer;
`;