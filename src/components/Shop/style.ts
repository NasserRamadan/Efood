import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export const Card = styled.div`
  background-color: ${cores.branca};
  width: 472px;
  height: 398px;
  margin-bottom: 68px;
  display: grid;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 24px auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80vw;
  }

  img {
    width: 100%;
    height: 216px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80vw;
    }
  }
`;

export const Nome = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-left: 8px;
  display: block;
`;

export const Container = styled.div`
  border: 1px solid ${cores.vermelho};
  border-top: none;
  background-color: ${cores.branca};
  width: 472px;
  height: 206px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80vw;
  }
`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 8px;

  @media (max-width: ${breakpoints.tablet}) {
    line-height: 16px;
  }
`;

export const Nota = styled.div`
  display: flex;
  color: ${cores.vermelho};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
