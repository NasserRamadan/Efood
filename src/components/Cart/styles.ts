import styled from 'styled-components';
import { cores } from '../../styles';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  button {
    border: none;
    background-color: ${cores.creme};
    color: ${cores.vermelho};
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    width: 100%;
    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Prices = styled.p`
  color: ${cores.creme};
  display: flex;
  font-weight: 700;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 40px;
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.creme};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.vermelho};
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-color: transparent;
    border: none;
    bottom: 0;
    right: 0;
    position: absolute;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    margin-bottom: 8px;

    &:hover {
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;