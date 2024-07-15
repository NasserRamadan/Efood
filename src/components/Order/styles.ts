import styled from 'styled-components';
import { cores } from '../../styles';

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`;
export const Container = styled.div`
  input {
    height: 32px;
    background-color: ${cores.creme};
    padding: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: left;
    width: 100%;
    border: 0;
  }

  & > p {
    color: ${cores.creme};

    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
    margin-bottom: 16px;
  }
`;

export const DeliveryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.delivery-open {
    display: flex;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: ${cores.vermelho};
    border: none;
    background-color: ${cores.creme};
    margin-bottom: 8px;
    height: 24px;
    &:hover {
      cursor: pointer;
    }
  }

  button:first-child {
    margin-top: 16px;
  }
`;

export const Row = styled.div`
  display: flex;

  .cep {
    margin-right: 32px;
  }
`;

export const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.payment-open {
    display: flex;
  }

  ${Sidebar} {
    background-color: ${cores.vermelho};
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;

    ${Container} {
      input {
        height: 32px;
        background-color: ${cores.creme};
        padding: 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        text-align: left;
        width: 100%;
        border: 0;
      }

      & > p {
        color: ${cores.creme};
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        text-align: left;
        margin-bottom: 16px;
      }

      ${Row} {
        display: flex;

        .card {
          width: 100%;
          margin-right: 32px;
        }

        .cvv {
          width: 40%;
        }

        .month {
          margin-right: 32px;
        }
      }

      ${ButtonContainer} {
        display: flex;
        flex-direction: column;

        button {
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: center;
          color: ${cores.vermelho};
          border: none;
          background-color: ${cores.creme};
          margin-bottom: 8px;
          height: 24px;

          &:hover {
            cursor: pointer;
          }
        }

        button:first-child {
          margin-top: 16px;
        }
      }
    }
  }
`;

export const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  justify-content: flex-end;
  z-index: 1;

  &.order-open {
    display: flex;
  }

  ${Sidebar} {
    background-color: ${cores.vermelho};
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;
  }

  ${Container} {
    & > p {
      color: ${cores.creme};
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }

    & > p:first-child {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  ${ButtonContainer} {
    display: flex;
    flex-direction: column;

    button {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      color: ${cores.vermelho};
      border: none;
      background-color: ${cores.creme};
      margin-bottom: 8px;
      height: 24px;

      &:hover {
        cursor: pointer;
      }
    }

    button:first-child {
      margin-top: 16px;
    }
  }
`;

export const DeliveryPaymentContainer = styled.div`
  input {
    &.error {
      border: 3px solid #000;
    }
  }
`;
