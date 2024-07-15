import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export const Card = styled.div`
  background-color: ${cores.vermelho};
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    margin: 8px;
    max-width: 304px;
    max-height: 167px;
  }

  &:hover {
    background-color: #000000;
    cursor: pointer;
  }

  button {
    background-color: ${cores.creme};
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0px;
    text-decoration: none;
    text-align: center;
    margin: 0 8px;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-left: 8px;
  display: block;
  color: ${cores.creme};
`;

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 8px;
  color: ${cores.creme};
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  max-width: 1024px;
  max-height: 344px;
  position: relative;
  z-index: 1;
  display: flex;
  padding: 32px;
  background-color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
    max-height: 90vh;
    flex-direction: column;
    width: 90%;
    height: auto;
  }

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
      height: 80%;
      margin: 16px auto;
    }

    @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
      width: 90%;
      margin: 16px auto;
    }
  }

  .fechar {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: -16px;
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      right: 16px;
      top: 0;
    }
  }
`;

export const TextContainer = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 32px;
    height: 100%;
  }

  p {
    display: flex;
    color: ${cores.branca};
    text-align: center;
    top: 0;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  div {
    color: ${cores.branca};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
    margin-right: 32px;

    @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
      font-size: 18px;
    }

  button {
    // width: 230px;
    // height: 24px;
    // flex-shrink: 0;
    border: none;
    background-color: ${cores.vermelho};
    color: ${cores.vermelho};
    text-align: center;
    font-size: 34px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }
`;
